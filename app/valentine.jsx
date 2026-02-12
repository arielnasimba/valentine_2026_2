'use client';

import React, { useState } from 'react';
import LoveTree from './lovetree';


export default function ValentineProposal() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  
  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };
  
  const handleYesClick = () => {
    setYesPressed(true);
  };
  
  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Estas segura?",
      "Realmente segura?",
      "Piensalo bien!",
      "Ultima oportunidad!",
      "Te vas arrepentir!",
      "Di que si!",
      "Estoy triste triste 😢",
      "Porfis 🥺"
    ];
    
    return phrases[Math.min(noCount, phrases.length - 1)];
  };
  
  const getYesButtonSize = () => {
    return 150 + noCount * 20;
  };
  
  const getNoButtonSize = () => {
    return Math.max(50, 100 - noCount * 10);
  };
  
  const getRandomPosition = () => {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 100;
    return {
      left: Math.random() * maxX,
      top: Math.random() * maxY
    };
  };

   if (yesPressed) {
      return <LoveTree />;
    }
  

  // if (yesPressed) {
  //   return (
  //     <div style={{
  //       display: 'flex',
  //       flexDirection: 'column',
  //       alignItems: 'center',
  //       justifyContent: 'center',
  //       minHeight: '100vh',
  //       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  //       fontFamily: 'Arial, sans-serif',
  //       padding: '20px',
  //       textAlign: 'center'
  //     }}>
  //       <h1 style={{
  //         fontSize: '4rem',
  //         color: '#fff',
  //         marginBottom: '20px',
  //         animation: 'bounce 1s infinite'
  //       }}>
  //         🎉 Youpi! 🎉
  //       </h1>
  //       <p style={{
  //         fontSize: '2rem',
  //         color: '#fff',
  //         marginBottom: '20px'
  //       }}>
  //         Sabia que ibas a decir si! ❤️
  //       </p>
  //       <div style={{
  //         fontSize: '5rem',
  //         animation: 'heartbeat 1.5s infinite'
  //       }}>
  //         💖
  //       </div>
  //       <style>{`
  //         @keyframes bounce {
  //           0%, 100% { transform: translateY(0); }
  //           50% { transform: translateY(-20px); }
  //         }
          
  //         @keyframes heartbeat {
  //           0%, 100% { transform: scale(1); }
  //           50% { transform: scale(1.2); }
  //         }
  //       `}</style>
  //     </div>
  //   );
  // }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      position: 'relative'
    }}>
      <h1 style={{
        fontSize: '3rem',
        color: '#fff',
        marginBottom: '40px',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
      }}>
        Quieres ser mi Valentine? 💝
      </h1>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center'
      }}>
        <button
          onClick={handleYesClick}
          style={{
            fontSize: `${getYesButtonSize() / 5}px`,
            padding: '20px 40px',
            backgroundColor: '#4ade80',
            color: '#fff',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease',
            width: `${getYesButtonSize()}px`,
            height: `${getYesButtonSize() / 2.5}px`
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.backgroundColor = '#22c55e';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.backgroundColor = '#4ade80';
          }}
        >
          Si! 💕
        </button>
        
        <button
          onClick={handleNoClick}
          style={{
            fontSize: `${getNoButtonSize() / 4}px`,
            padding: '10px 20px',
            backgroundColor: '#ef4444',
            color: '#fff',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease',
            width: `${getNoButtonSize()}px`,
            height: `${getNoButtonSize() / 2}px`,
            position: noCount > 0 ? 'absolute' : 'relative',
            ...(noCount > 0 ? getRandomPosition() : {})
          }}
          onMouseEnter={(e) => {
            if (noCount > 2) {
              const pos = getRandomPosition();
              e.target.style.left = `${pos.left}px`;
              e.target.style.top = `${pos.top}px`;
            }
          }}
        >
          {getNoButtonText()}
        </button>
      </div>
      
      {noCount > 0 && (
        <p style={{
          marginTop: '40px',
          fontSize: '1.5rem',
          color: '#fff',
          textAlign: 'center',
          animation: 'fadeIn 0.5s'
        }}>
          ¿Estas segura? 🥺
        </p>
      )}
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
