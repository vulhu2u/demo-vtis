'use client';

import Speaker from '@/assets/images/agenda/speaker.png';
<<<<<<< HEAD
import Speaker1 from '@/assets/images/speakers/4.png';
=======
>>>>>>> e3fa37643102cc01eef9cee62d968dc98643795c

import Image, { StaticImageData } from "next/image";
import { useMemo, useState } from "react";


interface Props {
  activeTab?: string;
}

<<<<<<< HEAD
interface Speaker {
  title: string;
  time: string;
  description: string;
  image?: StaticImageData;
}

=======
>>>>>>> e3fa37643102cc01eef9cee62d968dc98643795c

export default function AfternoonSection({activeTab} : Props) {
  const [hoveredImageAfternoon, setHoveredImageAfternoon] = useState<StaticImageData | null>(null);

<<<<<<< HEAD
  const listSpeakerAfternoon : Speaker[] = [
    {
      title: 'Keynote from Sponsor',
      time: '13:30 - 14:00',
      description: '30-minute keynote by Richard Teng - CEO, Binance on Tech Impact',
      image: Speaker1,
    },
    {
      title: 'Panel on Blockchain and its Applications in Life',
      time: '14:30 - 15:30',
      description: 'Discussion with representatives from Tether, Avax, SSID, and Chainlink',
    },
    {
      title: 'Keynote by Kucoin COO',
      time: '15:30 - 16:00',
      description: '30-minute keynote by Kucoin COO on Tech Impact',
    },
    {
      title: 'Panel Discussion with Vietnamese Startups in the Blockchain Field',
      time: '16:15 - 17:30',
      description: 'Discussion with representatives from Onus, ATX, Nami, and Icetea Labs',
=======
  const listSpeakerAfternoon = [
    {
      time: '13:30 - 14:30',
      description: 'Panel Discussion: The Future of AI: Traditional vs. Blockchain Suggested Topic: "Traditional AI and Blockchain AI: Opportunities for Collaboration and Competition Content: Discuss how traditional AI and Blockchain AI can complement each other, opportunities for innovation, and competitive potential within the tech ecosystem.',
      image: Speaker,
    },
    {
      time: '14:30 - 15:00',
      description: 'Keynote: The Future of Blockchain and AI for the Economy',
      image: Speaker,
    },
    {
      time: '15:00 - 15:30',
      description: 'Keynote: Blockchain Ecosystem and Its Impact on the Financial Economy',
      image: Speaker,
    },
    {
      time: '15:30 - 16:10',
      description: 'Keynote: The State of Digital Assets in Vietnam',
      image: Speaker,
    },
    {
      time: '16:10 - 17:00',
      description: 'Panel Discussion: Legal Framework for Digital Assets in Vietnam Topic: Legal Framework and Opportunities for Collaboration in the Digital Asset Sector.',
      image: Speaker,
>>>>>>> e3fa37643102cc01eef9cee62d968dc98643795c
    }

  ];


<<<<<<< HEAD
  const listSpeakerAfternoon2 : Speaker[] = [
    {
      title: 'Panel with Web3 Investment Funds',
      time: '13:30 - 14:30',
      description: 'Discussion with representatives from IDG, JDI, and Chain Capital',
    },
    {
      title: 'Keynote by Bitget Representative',
      time: '14:30 - 15:00',
      description: '',
    },
    {
      title: 'Panel on Gaming: Contributions of Games to Life and the Economy',
      time: '15:00 - 16:00',
      description: '',
    },
    {
      title: 'Panel on AI: The Future of AI - Open Source and Decentralized or Closed Source and Centralized?',
      time: '16:00 - 17:00',
      description:
          'Speakers:\n' +
          '- Hung Bui - VinAI (offline)\n' +
          '- Raghu - SAP (offline)\n' +
          '- Tuan Cao - Genetica (offline)\n' +
          '- Binh Tran - AVV (offline)\n' +
          '- Prof Fabio - Oxford Brookes, Oxford University (online)\n' +
          '- Moderator: Ha Dao\n' ,
    },
    {
      title: 'Closing Ceremony',
      time: '17:00 - 17:30',
      description:
          'Summary and closing remarks',
=======
  const listSpeakerAfternoon2 = [
    {
      time: '13:30 - 14:30',
      description: 'Panel Discussion: The Future of AI: Traditional vs. Blockchain Suggested Topic: "Traditional AI and Blockchain AI: Opportunities for Collaboration and Competition Content: Discuss how traditional AI and Blockchain AI can complement each other, opportunities for innovation, and competitive potential within the tech ecosystem.',
      image: Speaker,
    },
    {
      time: '14:30 - 15:00',
      description: 'Keynote: The Future of Blockchain and AI for the Economy',
      image: Speaker,
    },
    {
      time: '15:00 - 15:30',
      description: 'Keynote: Blockchain Ecosystem and Its Impact on the Financial Economy',
      image: Speaker,
    },
    {
      time: '15:30 - 16:10',
      description: 'Keynote: The State of Digital Assets in Vietnam',
      image: Speaker,
    },
    {
      time: '16:10 - 17:00',
      description: 'Panel Discussion: Legal Framework for Digital Assets in Vietnam Topic: Legal Framework and Opportunities for Collaboration in the Digital Asset Sector.',
      image: Speaker,
>>>>>>> e3fa37643102cc01eef9cee62d968dc98643795c
    }
  ];

  const listData = useMemo(() => {
    if (activeTab === 'Day 1'){
      return listSpeakerAfternoon;
    }
    return listSpeakerAfternoon2

  }, [activeTab, listSpeakerAfternoon, listSpeakerAfternoon2]);

  return (

      <div
          className='h-full w-full text-white flex flex-col tablet:flex-row tablet:justify-between py-8 tablet:py-0'>
        <p className='font-neueMed text-[20px] tablet:text-[40px] fullscreen:text-[106px] tablet:max-w-[334px] fullscreen:max-w-[890px] leading-[28px] tablet:leading-[48px] fullscreen:leading-[128px] opacity-[0.4]'>
          Afternoon Session: Blockchain Ecosystem & AI
        </p>
        <hr className='w-full h-[1px] block tablet:hidden border-[#333] mb-6 mt-5'/>

        {/* Hovered Image - displayed only if hoveredImage is set */}
        {hoveredImageAfternoon && (
            <div
<<<<<<< HEAD
                className="hidden tablet:block absolute left-[400px] fullscreen:left-[650px] opacity-100 transition-opacity duration-300">
=======
                className="hidden tablet:block absolute left-[300px] fullscreen:left-[650px] opacity-100 transition-opacity duration-300">
>>>>>>> e3fa37643102cc01eef9cee62d968dc98643795c

              <Image
                  src={hoveredImageAfternoon}
                  alt="Speaker"
                  width={240}
                  height={328}
                  className="object-left fullscreen:w-[640px] fullscreen:h-[874px]"
              />
            </div>
        )}

        {/* Timeline Items */}
        <div className="flex flex-col max-w-full tablet:max-w-[921px] fullscreen:max-w-[2456px] w-full">
          {listData.map((speaker, index) => (
              <div
                  key={index}
                  className="relative group h-full flex flex-col"
<<<<<<< HEAD
                  onMouseEnter={() => speaker.image ? setHoveredImageAfternoon(speaker.image) : setHoveredImageAfternoon(null)}
                  onMouseLeave={() => setHoveredImageAfternoon(null)}
              >
                <div
                    className="flex tablet:group-hover:bg-white tablet:group-hover:text-black py-6 px-2 fullscreen:py-[64px]  text-[18px] fullscreen:text-[48px] font-neueMed">
                  <div className=" w-full tablet:max-w-[353px] fullscreen:max-w-[941px] max-w-[116px] ">
                    <p>{speaker.time}</p>
                    <p className=''>{speaker.title}</p>
                  </div>
                  <p className='pl-5'
                     dangerouslySetInnerHTML={{ __html: speaker.description.replaceAll('\n', '<br />') }}/>
=======
                  onMouseEnter={() => setHoveredImageAfternoon(speaker.image)}  // Set image on hover
                  onMouseLeave={() => setHoveredImageAfternoon(null)}           // Clear image on leave
              >
                <div
                    className="flex tablet:group-hover:bg-white tablet:group-hover:text-black py-6 px-2 fullscreen:py-[64px] fullscreen:text-[48px] font-neueMed">
                  <p className=" w-full tablet:max-w-[353px] fullscreen:max-w-[941px] max-w-[116px] ">{speaker.time}</p>
                  <p className=" w-full">{speaker.description}</p>
>>>>>>> e3fa37643102cc01eef9cee62d968dc98643795c
                </div>
                {index !== listData.length - 1 && (
                    <hr className="w-full h-[1px] border-[#333]"/>
                )}
              </div>
          ))}
        </div>
      </div>
  );
}
