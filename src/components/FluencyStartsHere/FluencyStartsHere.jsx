import studyCat from "../../assets/studycat_adventurer.DHxUIxmG.svg";
import question from "../../assets/New folder/kitty-question.D2JgxErm.svg";
import english from "../../assets/New folder/icon_english-flag.BLdrV-Rf.svg";
import spanish from "../../assets/New folder/icon_spanish-flag.DExHXrhL.svg";
import french from "../../assets/New folder/icon_french-flag.BGJzckFG.svg";
import german from "../../assets/New folder/icon_german-flag.0ucMUeXj.svg";
import chinese from "../../assets/New folder/icon_chinese-flag.zSzskDzd.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FluencyStartsHere = () => {
  const [data, setData] = useState([]);

  const totalData = [
    {
      id: 1,
      path: "/learn-english",
      name: "Learn English",
      icon: english,
      LearnEnglish: [
        {
          id: 1,
          name: "English Basics",
          image: "english_basics.jpg",
          title: "Learn English",
          description:
            "Master the basics of English with essential vocabulary and grammar lessons.",
          author: "John Smith",
          country: "USA",
        },
        {
          id: 2,
          name: "English Grammar",
          image: "english_grammar.jpg",
          title: "Grammar Guide",
          description:
            "Understand the fundamentals of English grammar with simple explanations and exercises.",
          author: "Emily Brown",
          country: "UK",
        },
        {
          id: 3,
          name: "English Vocabulary",
          image: "english_vocabulary.jpg",
          title: "Expand Your Vocabulary",
          description:
            "Learn new words and expressions to boost your English language skills.",
          author: "David Green",
          country: "Canada",
        },
        {
          id: 4,
          name: "English Conversations",
          image: "english_conversations.jpg",
          title: "Speak English",
          description:
            "Practice conversational English and improve your speaking fluency.",
          author: "Sarah Johnson",
          country: "Australia",
        },
        {
          id: 5,
          name: "English Listening",
          image: "english_listening.jpg",
          title: "Improve Listening",
          description:
            "Develop your listening skills with real-world audio exercises.",
          author: "Mark Taylor",
          country: "Ireland",
        },
        {
          id: 6,
          name: "English Writing",
          image: "english_writing.jpg",
          title: "Enhance Writing",
          description: "Learn to write clearly and effectively in English.",
          author: "Rachel Wilson",
          country: "USA",
        },
        {
          id: 7,
          name: "English Pronunciation",
          image: "english_pronunciation.jpg",
          title: "Perfect Pronunciation",
          description: "Master English pronunciation and speak confidently.",
          author: "Liam Adams",
          country: "UK",
        },
        {
          id: 8,
          name: "English Idioms",
          image: "english_idioms.jpg",
          title: "Learn Idioms",
          description: "Discover common English idioms and their meanings.",
          author: "Sophia White",
          country: "Canada",
        },
        {
          id: 9,
          name: "English Advanced",
          image: "english_advanced.jpg",
          title: "Master English",
          description:
            "Take your English skills to an advanced level with comprehensive lessons.",
          author: "Henry Scott",
          country: "Australia",
        },
      ],
    },
    {
      id: 2,
      path: "/learn-spanish",
      name: "Learn Spanish",
      icon: spanish,
      LearnSpanish: [
        {
          id: 10,
          name: "Spanish Basics",
          image: "spanish_basics.jpg",
          title: "Learn Spanish",
          description:
            "Get started with Spanish by learning essential phrases and vocabulary.",
          author: "Carlos García",
          country: "Spain",
        },
        {
          id: 11,
          name: "Spanish Grammar",
          image: "spanish_grammar.jpg",
          title: "Grammar Essentials",
          description:
            "Understand Spanish grammar with detailed explanations and examples.",
          author: "Ana López",
          country: "Mexico",
        },
        {
          id: 12,
          name: "Spanish Vocabulary",
          image: "spanish_vocabulary.jpg",
          title: "Expand Your Vocabulary",
          description:
            "Learn new words and expressions to speak Spanish more fluently.",
          author: "Luis Fernández",
          country: "Argentina",
        },
        {
          id: 13,
          name: "Spanish Conversations",
          image: "spanish_conversations.jpg",
          title: "Speak Spanish",
          description:
            "Improve your conversational Spanish with interactive practice sessions.",
          author: "María González",
          country: "Colombia",
        },
        {
          id: 14,
          name: "Spanish Listening",
          image: "spanish_listening.jpg",
          title: "Improve Listening",
          description:
            "Enhance your listening skills with Spanish audio lessons.",
          author: "Pablo Ruiz",
          country: "Chile",
        },
        {
          id: 15,
          name: "Spanish Writing",
          image: "spanish_writing.jpg",
          title: "Enhance Writing",
          description: "Learn to write clearly and effectively in Spanish.",
          author: "Isabella Torres",
          country: "Spain",
        },
        {
          id: 16,
          name: "Spanish Pronunciation",
          image: "spanish_pronunciation.jpg",
          title: "Perfect Pronunciation",
          description:
            "Master Spanish pronunciation and speak with confidence.",
          author: "Diego Martínez",
          country: "Mexico",
        },
        {
          id: 17,
          name: "Spanish Idioms",
          image: "spanish_idioms.jpg",
          title: "Learn Idioms",
          description:
            "Discover common Spanish idioms and their cultural meanings.",
          author: "Sofía Rivera",
          country: "Peru",
        },
        {
          id: 18,
          name: "Spanish Advanced",
          image: "spanish_advanced.jpg",
          title: "Master Spanish",
          description:
            "Advance your Spanish skills with challenging grammar and vocabulary.",
          author: "Miguel Hernández",
          country: "Argentina",
        },
      ],
    },
    {
      id: 3,
      path: "/learn-french",
      name: "Learn French",
      icon: french,
      LearnFrench: [
        {
          id: 19,
          name: "French Basics",
          image: "french_basics.jpg",
          title: "Learn French",
          description:
            "Explore the basics of French language, focusing on pronunciation and key vocabulary.",
          author: "Claire Moreau",
          country: "France",
        },
        {
          id: 20,
          name: "French Grammar",
          image: "french_grammar.jpg",
          title: "Grammar Guide",
          description:
            "Learn French grammar rules with easy-to-understand explanations.",
          author: "Jean Dubois",
          country: "France",
        },
        {
          id: 21,
          name: "French Vocabulary",
          image: "french_vocabulary.jpg",
          title: "Expand Vocabulary",
          description:
            "Build your French vocabulary with essential words and expressions.",
          author: "Sophie Lemieux",
          country: "Canada",
        },
        {
          id: 22,
          name: "French Conversations",
          image: "french_conversations.jpg",
          title: "Speak French",
          description: "Practice everyday French conversations for fluency.",
          author: "Marie Laurent",
          country: "France",
        },
        {
          id: 23,
          name: "French Listening",
          image: "french_listening.jpg",
          title: "Improve Listening",
          description:
            "Hone your listening skills with French audio materials.",
          author: "André Mercier",
          country: "Belgium",
        },
        {
          id: 24,
          name: "French Writing",
          image: "french_writing.jpg",
          title: "Enhance Writing",
          description:
            "Learn to write effectively in French with grammar and structure tips.",
          author: "Isabelle Martin",
          country: "France",
        },
        {
          id: 25,
          name: "French Pronunciation",
          image: "french_pronunciation.jpg",
          title: "Perfect Pronunciation",
          description:
            "Master French pronunciation and sound like a native speaker.",
          author: "Antoine Bernard",
          country: "Switzerland",
        },
        {
          id: 26,
          name: "French Idioms",
          image: "french_idioms.jpg",
          title: "Learn Idioms",
          description: "Explore French idioms and their cultural significance.",
          author: "Charlotte Dupont",
          country: "France",
        },
        {
          id: 27,
          name: "French Advanced",
          image: "french_advanced.jpg",
          title: "Master French",
          description:
            "Reach an advanced level in French with complex grammar and vocabulary.",
          author: "Hélène Rousseau",
          country: "Canada",
        },
      ],
    },
    {
      id: 4,
      path: "/learn-german",
      name: "Learn German",
      icon: german,
      LearnGerman: [
        {
          id: 28,
          name: "German Basics",
          image: "german_basics.jpg",
          title: "Learn German",
          description:
            "Start learning German with essential phrases, grammar, and pronunciation tips.",
          author: "Hans Müller",
          country: "Germany",
        },
        {
          id: 29,
          name: "German Grammar",
          image: "german_grammar.jpg",
          title: "Grammar Guide",
          description:
            "Understand German grammar rules and sentence structure.",
          author: "Klaus Schneider",
          country: "Germany",
        },
        {
          id: 30,
          name: "German Vocabulary",
          image: "german_vocabulary.jpg",
          title: "Expand Vocabulary",
          description:
            "Learn essential German words and phrases to build your language skills.",
          author: "Greta Fischer",
          country: "Austria",
        },
        {
          id: 31,
          name: "German Conversations",
          image: "german_conversations.jpg",
          title: "Speak German",
          description:
            "Practice everyday German conversations for fluency and confidence.",
          author: "Markus Weber",
          country: "Switzerland",
        },
        {
          id: 32,
          name: "German Listening",
          image: "german_listening.jpg",
          title: "Improve Listening",
          description:
            "Develop your German listening skills with practical audio exercises.",
          author: "Anna Bauer",
          country: "Germany",
        },
        {
          id: 33,
          name: "German Writing",
          image: "german_writing.jpg",
          title: "Enhance Writing",
          description:
            "Learn to write effectively in German with practical grammar and structure tips.",
          author: "Stefan Koch",
          country: "Germany",
        },
        {
          id: 34,
          name: "German Pronunciation",
          image: "german_pronunciation.jpg",
          title: "Perfect Pronunciation",
          description:
            "Master German pronunciation to sound like a native speaker.",
          author: "Lena Wagner",
          country: "Germany",
        },
        {
          id: 35,
          name: "German Idioms",
          image: "german_idioms.jpg",
          title: "Learn Idioms",
          description:
            "Discover common German idioms and their cultural significance.",
          author: "Friedrich Hoffmann",
          country: "Austria",
        },
        {
          id: 36,
          name: "German Advanced",
          image: "german_advanced.jpg",
          title: "Master German",
          description:
            "Take your German skills to an advanced level with challenging lessons.",
          author: "Clara Becker",
          country: "Switzerland",
        },
      ],
    },
    {
      id: 5,
      path: "/learn-chinese",
      name: "Learn Chinese",
      icon: chinese,
      LearnChinese: [
        {
          id: 37,
          name: "Chinese Basics",
          image: "chinese_basics.jpg",
          title: "Learn Chinese",
          description:
            "Start learning Chinese with essential phrases, tones, and basic vocabulary.",
          author: "Li Wei",
          country: "China",
        },
        {
          id: 38,
          name: "Chinese Grammar",
          image: "chinese_grammar.jpg",
          title: "Grammar Guide",
          description:
            "Understand the rules of Chinese grammar and sentence construction.",
          author: "Wang Min",
          country: "China",
        },
        {
          id: 39,
          name: "Chinese Vocabulary",
          image: "chinese_vocabulary.jpg",
          title: "Expand Vocabulary",
          description:
            "Learn essential Chinese words and expressions for daily use.",
          author: "Chen Lin",
          country: "Taiwan",
        },
        {
          id: 40,
          name: "Chinese Conversations",
          image: "chinese_conversations.jpg",
          title: "Speak Chinese",
          description:
            "Practice common Chinese conversations to improve speaking skills.",
          author: "Zhao Hui",
          country: "China",
        },
        {
          id: 41,
          name: "Chinese Listening",
          image: "chinese_listening.jpg",
          title: "Improve Listening",
          description:
            "Develop your listening skills with authentic Chinese audio materials.",
          author: "Sun Yu",
          country: "Singapore",
        },
        {
          id: 42,
          name: "Chinese Writing",
          image: "chinese_writing.jpg",
          title: "Enhance Writing",
          description:
            "Learn to write Chinese characters with tips on stroke order and structure.",
          author: "Xu Mei",
          country: "China",
        },
        {
          id: 43,
          name: "Chinese Pronunciation",
          image: "chinese_pronunciation.jpg",
          title: "Perfect Pronunciation",
          description:
            "Master Chinese tones and pronunciation for clear communication.",
          author: "Gao Jian",
          country: "Hong Kong",
        },
        {
          id: 44,
          name: "Chinese Idioms",
          image: "chinese_idioms.jpg",
          title: "Learn Idioms",
          description:
            "Discover popular Chinese idioms and their cultural meanings.",
          author: "Zhang Ping",
          country: "Taiwan",
        },
        {
          id: 45,
          name: "Chinese Advanced",
          image: "chinese_advanced.jpg",
          title: "Master Chinese",
          description:
            "Reach an advanced level in Chinese with challenging lessons and practice.",
          author: "Liu Fang",
          country: "China",
        },
      ],
    },
  ];

  useEffect(() => {
    setData(totalData);
  }, []);

  return (
    <div className="mt-16 relative">
      <h2 className="font-bold text-2xl">{data.length}</h2>
      <div>
        <img
          className="w-full"
          src="https://i.ibb.co.com/qgD4SQb/Screenshot-12.png"
          alt="First Image"
        />
        <div className="bg-[#499DEC] ">
          <img
            className="absolute -top-24 left-1/2 transform -translate-x-1/2 max-w-[150px]"
            src={studyCat}
            alt="Second Image"
          />
        </div>
      </div>
      <div className="bg-[#499DEC] text-white pt-24">
        <h2 className="md:text-4xl sm:text-2xl max-w-[385px] mx-auto p-2 text-center -top-4 font-bold ">
          Your child's journey to fluency starts here
        </h2>
        <p className="text-lg font-bold text-center my-7 p-2">
          Embark on an exciting language learning voyage with Studycat today!
        </p>
        <p className="text-lg font-normal max-w-[771px] mx-auto text-center py-4 p-2">
          With our engaging, educational apps, your child will discover the joy
          of languages, setting them on a path to global communication and
          understanding.
        </p>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 max-w-screen-xl mx-auto items-center p-2 gap-4 pb-16">
          <img className="w-[110px] h-auto" src={question} alt="" />
          {data.map((item) => (
            <Link to={item.path} key={item.id}>
              <Link to={`/login`}>
                <div className="flex flex-col items-center px-6 py-10 justify-center text-center space-y-2 text-[#499DEC] border border-[#499DEC] bg-[#DEF0FA] rounded-xl max-w-[170px] max-h-[110px]">
                  <img
                    className="w-14 h-14 pb-2"
                    src={item.icon}
                    alt={item.name || "Icon"}
                  />
                  {item.name && (
                    <p className="font-medium text-lg">{item.name}</p>
                  )}
                </div>
              </Link>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FluencyStartsHere;
