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
      <h2 onDoubleClick={handleDoubleClick}>Фото</h2>
      <img src="me.jpeg" alt="Моя фотография" />
    </div>
  );
}

function StoryBlock() {
  return (
    <div className="block">
      <h2>О себе</h2>
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
       Однако, кроме разработки, мне также нравится и преподавать программирование. Учить других людей, особенно подрастающее поколение, и видеть, как они профессионально растут. Мне нравится делиться своими знаниями и навыками с учащимися, вдохновляя их на свои собственные достижения.
      </p>
    </div>
  );
}

function VideoBlock() {
  return (
    <div className="block">
      <h2>Видео</h2>
      <iframe src="https://capture.dropbox.com/embed/8G8wbwTgEG8qf8eu?source=copy-embed" width="560" height="315" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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