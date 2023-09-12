import React, { useState } from 'react';
import './App.css';

function PhotoBlock() {
  const [isAnimationActive, setAnimationActive] = useState(false);

  const handleDoubleClick = () => {
    setAnimationActive(true);
    setTimeout(() => {
      setAnimationActive(false);
    }, 2000); // Продолжительность анимации в миллисекундах
  };

  return (
    <div className={`block ${isAnimationActive ? 'rotate-animation' : ''}`}>
      <h2 onDoubleClick={handleDoubleClick}>Фотография</h2>
      <img src="me.jpeg" alt="Моя фотография" />
    </div>
  );
}

function StoryBlock() {
  return (
    <div className="block">
      <h2>Моя история</h2>
      <p>
        Программирование стало для меня любимым делом благодаря его безграничным возможностям и творческому потенциалу.
        С самого детства меня всегда привлекали компьютеры и технологии. Когда я впервые начал изучать программирование,
        я понял, что это именно то, чем хочу заниматься.
      </p>
      <p>
        Каждый раз, когда я создаю новое приложение или решаю сложную задачу, я ощущаю огромное удовлетворение.
        В программировании я нахожу свободу для своих идей и возможность воплощать их в жизнь. Это захватывает меня
        и мотивирует развиваться дальше.
      </p>
      <p>
        Я также ценю сообщество программистов, которое всегда готово помочь и поделиться своими знаниями.
        Взаимодействие с другими разработчиками позволяет мне учиться и расти профессионально.
      </p>
      <p>
        В целом, программирование стало для меня не только работой, но и хобби, которое приносит мне радость и
        удовлетворение. Я горжусь своими достижениями в этой области и с нетерпением жду новых вызовов и проектов.
      </p>
    </div>
  );
}

function VideoBlock() {
  return (
    <div className="block">
      <h2>Видео</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/video_id"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Бастанжиев Степан</h1>
      <PhotoBlock />
      <StoryBlock />
      <VideoBlock />
    </div>
  );
}

export default App;