'use client';

import { useState } from 'react';
import Image from 'next/image';

type PersonalityType = 'Bold Adventurer' | 'Cozy Classic' | 'Health Nut' | 'Artisan Snob';

interface Answer {
  text: string;
  personality: PersonalityType;
}

interface Question {
  question: string;
  answers: Answer[];
}

interface Personality {
  coffee: string;
  tagline: string;
  image: string;
}

const questions: Question[] = [
  {
    question: "How do you spend your ideal weekend morning?",
    answers: [
      { text: "🏃 Early run, then a protein smoothie", personality: "Health Nut" },
      { text: "☕ Slow start with a good book and coffee", personality: "Cozy Classic" },
      { text: "🎨 Exploring a new café or farmers market", personality: "Artisan Snob" },
      { text: "⚡ Jumping into a new project or hobby", personality: "Bold Adventurer" }
    ]
  },
  {
    question: "What's your approach to trying new foods?",
    answers: [
      { text: "🌶️ Always ordering the most adventurous thing on the menu", personality: "Bold Adventurer" },
      { text: "🥗 Checking the ingredients and nutrition first", personality: "Health Nut" },
      { text: "🍝 Sticking with classic dishes done really well", personality: "Cozy Classic" },
      { text: "👨‍🍳 Asking the chef what they'd recommend", personality: "Artisan Snob" }
    ]
  },
  {
    question: "How do you plan a vacation?",
    answers: [
      { text: "🗺️ Detailed itinerary with the best hidden spots", personality: "Artisan Snob" },
      { text: "🏖️ Book a cozy place and see what happens", personality: "Cozy Classic" },
      { text: "🥾 Adventure-packed with hiking, activities, and challenges", personality: "Bold Adventurer" },
      { text: "🧘 Wellness retreat focused on health and balance", personality: "Health Nut" }
    ]
  },
  {
    question: "What's your ideal Friday night?",
    answers: [
      { text: "🍷 Intimate dinner at a place nobody knows about", personality: "Artisan Snob" },
      { text: "🎬 Movie marathon in pajamas with comfort snacks", personality: "Cozy Classic" },
      { text: "🎉 Something spontaneous and high-energy", personality: "Bold Adventurer" },
      { text: "🧘‍♀️ Yoga class followed by a healthy home-cooked meal", personality: "Health Nut" }
    ]
  },
  {
    question: "How do you approach your work?",
    answers: [
      { text: "💪 Push hard, take risks, get it done", personality: "Bold Adventurer" },
      { text: "🌱 Balanced and sustainable, health comes first", personality: "Health Nut" },
      { text: "🎯 Focused on quality and doing it the right way", personality: "Artisan Snob" },
      { text: "📚 Steady and reliable, tried-and-true methods", personality: "Cozy Classic" }
    ]
  },
  {
    question: "What sounds like the perfect afternoon?",
    answers: [
      { text: "🏔️ Trying something you've never done before", personality: "Bold Adventurer" },
      { text: "📖 Relaxing at home with your favorite comfort activities", personality: "Cozy Classic" },
      { text: "🏃‍♂️ Active outdoor time that makes you feel good", personality: "Health Nut" },
      { text: "🎭 Discovering a hidden gem – gallery, shop, or experience", personality: "Artisan Snob" }
    ]
  },
  {
    question: "How do you recharge after a long day?",
    answers: [
      { text: "🛋️ Quiet time alone with tea and comfort", personality: "Cozy Classic" },
      { text: "🎸 Something creative or stimulating", personality: "Bold Adventurer" },
      { text: "🍃 Meditation, stretching, or a calming routine", personality: "Health Nut" },
      { text: "🎵 Curating the perfect playlist or journaling", personality: "Artisan Snob" }
    ]
  }
];

const personalities: Record<PersonalityType, Personality> = {
  "Bold Adventurer": {
    coffee: "Double Espresso",
    tagline: "You live for intensity",
    image: "/espresso.jpg"
  },
  "Cozy Classic": {
    coffee: "Medium Roast Drip",
    tagline: "Comfort in every cup",
    image: "/drip-coffee.jpg"
  },
  "Health Nut": {
    coffee: "Oat Milk Americano",
    tagline: "Wellness in every sip",
    image: "/americano.jpg"
  },
  "Artisan Snob": {
    coffee: "Pour-Over, Single Origin",
    tagline: "You know what you like",
    image: "/artisan-coffee.jpg"
  }
};

export default function Home() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<PersonalityType[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleStart = () => {
    setStarted(true);
  };

  const handleAnswer = (personality: PersonalityType) => {
    const newAnswers = [...answers, personality];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResults = () => {
    const counts: Record<PersonalityType, number> = {
      "Bold Adventurer": 0,
      "Cozy Classic": 0,
      "Health Nut": 0,
      "Artisan Snob": 0
    };

    answers.forEach(answer => {
      counts[answer]++;
    });

    const results = Object.entries(counts).map(([personality, count]) => ({
      personality: personality as PersonalityType,
      count,
      percentage: Math.round((count / questions.length) * 100)
    }));

    return results.sort((a, b) => b.percentage - a.percentage);
  };

  const results = showResults ? calculateResults() : [];

  if (!started) {
    return (
      <div className="flex min-h-screen items-center justify-center p-5">
        <div className="bg-gradient-to-br from-[#fff9f0] to-[#f5e6d3] rounded-2xl p-12 max-w-2xl w-full shadow-lg">
          <h1 className="text-4xl font-normal mb-6 text-center text-[#6b4423]">
            What's Your Coffee Personality?
          </h1>
          <p className="text-lg text-center mb-10 text-[#5a3d2b]">
            Discover your unique coffee personality and find your perfect cup
          </p>
          <button
            onClick={handleStart}
            className="w-full bg-white/60 border-2 border-[#c9a87c] rounded-xl py-5 px-6 text-lg text-[#5a3d2b] hover:bg-white/90 hover:-translate-y-1 transition-all shadow-md"
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="flex min-h-screen items-center justify-center p-5">
        <div className="bg-gradient-to-br from-[#fff9f0] to-[#f5e6d3] rounded-2xl p-12 max-w-3xl w-full shadow-lg">
          <h1 className="text-4xl font-normal mb-8 text-center text-[#6b4423]">
            Your Coffee Personality
          </h1>
          <div className="space-y-6">
            {results.filter(r => r.percentage > 0).map((result, index) => (
              <div key={result.personality} className={`${index === 0 ? 'bg-gradient-to-br from-[#d4a574]/20 to-[#8b6f47]/20 border-4 border-[#d4a574] shadow-xl' : 'bg-white/60 border-2 border-[#c9a87c]'} rounded-xl p-6`}>
                <div className="flex items-start gap-6">
                  <div className="relative w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden">
                    <Image
                      src={personalities[result.personality].image}
                      alt={result.personality}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between mb-2">
                      <h2 className="text-2xl font-medium text-[#6b4423]">
                        {result.personality}
                      </h2>
                      <span className="text-3xl font-medium text-[#d4a574]">
                        {result.percentage}%
                      </span>
                    </div>
                    <p className="text-lg mb-3 text-[#5a3d2b]">
                      {personalities[result.personality].coffee}
                    </p>
                    <p className="text-base italic text-[#8b6f47]">
                      {personalities[result.personality].tagline}
                    </p>
                    <div className="mt-4 bg-white/40 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#d4a574] to-[#8b6f47] h-full rounded-full transition-all"
                        style={{ width: `${result.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              setStarted(false);
              setCurrentQuestion(0);
              setAnswers([]);
              setShowResults(false);
            }}
            className="w-full mt-8 bg-white/60 border-2 border-[#c9a87c] rounded-xl py-4 px-6 text-lg text-[#5a3d2b] hover:bg-white/90 hover:-translate-y-1 transition-all"
          >
            Take Quiz Again
          </button>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="flex min-h-screen items-center justify-center p-5">
      <div className="bg-gradient-to-br from-[#fff9f0] to-[#f5e6d3] rounded-2xl p-12 max-w-2xl w-full shadow-lg">
        <div className="mb-6 text-center">
          <p className="text-sm text-[#8b6f47] mb-2">
            Question {currentQuestion + 1} of {questions.length}
          </p>
          <div className="bg-white/40 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#d4a574] to-[#8b6f47] h-full rounded-full transition-all"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
        <h2 className="text-2xl font-normal mb-8 text-[#5a3d2b]">
          {question.question}
        </h2>
        <div className="space-y-4">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(answer.personality)}
              className="w-full bg-white/60 border-2 border-[#c9a87c] rounded-xl py-5 px-6 text-left text-base text-[#5a3d2b] hover:bg-white/90 hover:-translate-y-1 transition-all"
            >
              {answer.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
