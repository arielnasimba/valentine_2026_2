'use client';

import React, { useState, useEffect } from 'react';

export default function LoveTree() {
  const [hearts, setHearts] = useState([]);
  const [timeData, setTimeData] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const startDate = new Date('2015-06-10T00:00:00');

  // Calculate time difference
  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const diff = now - startDate;
      
      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      
      const years = Math.floor(days / 365.25);
      const remainingDays = days - Math.floor(years * 365.25);
      const months = Math.floor(remainingDays / 30.44);
      const finalDays = Math.floor(remainingDays - (months * 30.44));
      
      setTimeData({
        years,
        months,
        days: finalDays,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Generate falling hearts
  useEffect(() => {
    const generateHeart = () => {
      const newHeart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        animationDuration: 4 + Math.random() * 4,
        size: 15 + Math.random() * 15,
        swing: -20 + Math.random() * 40,
        delay: Math.random() * 2
      };
      
      setHearts(prev => [...prev, newHeart]);
      
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id));
      }, (newHeart.animationDuration + newHeart.delay) * 1000);
    };

    // Generate hearts continuously
    const interval = setInterval(generateHeart, 300);
    
    // Initial hearts
    for (let i = 0; i < 30; i++) {
      setTimeout(generateHeart, i * 100);
    }
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 50%, #90EE90 100%)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Georgia', serif",
      padding: '20px'
    }}>
      
      {/* TE AMO text on the left */}
      <div style={{
        position: 'absolute',
        left: '50px',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '4rem',
        fontWeight: 'bold',
        color: '#ff1744',
        textShadow: '3px 3px 6px rgba(0,0,0,0.2)',
        animation: 'pulse 2s infinite',
        zIndex: 10
      }}>
        TE AMO
      </div>

      {/* Tree trunk */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        width: '120px',
        height: '300px',
        background: 'linear-gradient(to right, #8B7355, #D2B48C, #8B7355)',
        borderRadius: '20px 20px 0 0',
        boxShadow: 'inset -10px 0 20px rgba(0,0,0,0.2)',
        zIndex: 2
      }}>
        {/* Tree texture lines */}
        <div style={{
          position: 'absolute',
          width: '3px',
          height: '100%',
          background: 'rgba(0,0,0,0.1)',
          left: '30%'
        }} />
        <div style={{
          position: 'absolute',
          width: '3px',
          height: '100%',
          background: 'rgba(0,0,0,0.1)',
          right: '30%'
        }} />
      </div>

      {/* Tree crown/foliage area */}
      <div style={{
        position: 'absolute',
        bottom: '250px',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(210, 180, 140, 0.3) 0%, transparent 70%)',
        borderRadius: '50%',
        zIndex: 1
      }} />

      {/* Falling hearts (leaves) */}
      {hearts.map(heart => (
        <div
          key={heart.id}
          style={{
            position: 'absolute',
            left: `${heart.left}%`,
            top: '-50px',
            fontSize: `${heart.size}px`,
            color: heart.size > 20 ? '#ff1744' : '#ff4081',
            animation: `fall ${heart.animationDuration}s linear ${heart.delay}s forwards, swing 2s ease-in-out infinite`,
            zIndex: 3,
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
            '--swing': `${heart.swing}px`
          }}
        >
          ❤️
        </div>
      ))}

      {/* Static hearts on tree (always there) */}
      {Array.from({ length: 50 }).map((_, i) => {
        const angle = (i / 50) * Math.PI * 2;
        const radius = 100 + Math.random() * 150;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <div
            key={`static-${i}`}
            style={{
              position: 'absolute',
              left: '50%',
              top: '40%',
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              fontSize: `${15 + Math.random() * 10}px`,
              color: Math.random() > 0.5 ? '#ff1744' : '#ff4081',
              animation: `sway ${2 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 2}s`,
              zIndex: 2,
              filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.15))'
            }}
          >
            ❤️
          </div>
        );
      })}

      {/* Counter display */}
      <div style={{
        position: 'absolute',
        top: '60px',
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '30px 50px',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        zIndex: 10
      }}>
        <div style={{
          display: 'flex',
          gap: '30px',
          marginBottom: '20px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#ff1744' }}>
              {timeData.years}
            </div>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>años</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#ff1744' }}>
              {timeData.months}
            </div>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>meses</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#ff1744' }}>
              {timeData.days}
            </div>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>días</div>
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '20px',
          fontSize: '1.2rem',
          color: '#333',
          marginBottom: '15px'
        }}>
          <span><strong>{String(timeData.hours).padStart(2, '0')}</strong>h</span>
          <span><strong>{String(timeData.minutes).padStart(2, '0')}</strong>m</span>
          <span><strong>{String(timeData.seconds).padStart(2, '0')}</strong>s</span>
        </div>
      </div>

      {/* Bottom text */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        fontSize: '1.8rem',
        color: '#fff',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        textAlign: 'center',
        fontStyle: 'italic',
        zIndex: 10
      }}>
        Nuestra historia empezó hace...
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fall {
          to {
            top: 100vh;
            transform: translateY(0) rotate(360deg);
          }
        }
        
        @keyframes swing {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(var(--swing));
          }
        }
        
        @keyframes sway {
          0%, 100% {
            transform: translate(calc(-50% + var(--x, 0px)), calc(-50% + var(--y, 0px))) rotate(-5deg);
          }
          50% {
            transform: translate(calc(-50% + var(--x, 0px)), calc(-50% + var(--y, 0px))) rotate(5deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: translateY(-50%) scale(1);
            opacity: 0.9;
          }
          50% {
            transform: translateY(-50%) scale(1.1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
