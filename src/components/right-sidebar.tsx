import Image from 'next/image';

export default function RightSidebar() {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl text-center bg-indigo-600 text-white p-2">
        プロフィール
      </h1>
      <h1 className="border-2 border-indigo-500/30 p-3 my-2">
        <p>モダンWebアプリ開発と良いテストに興味があります。</p>
        <p>QAエンジニア：5割、フロントエンド：3割、バックエンド開発：2割くらいの人です。</p>
        <p>組み込み系からWeb系へ移行しました。</p>
        <p>趣味はピアノ。キーを叩くことが好き。ショパンとかモーツァルトとかクラシックが好きです。</p>
      </h1>

      <h1 className="text-2xl text-center bg-indigo-600 text-white p-2">
        スキル
      </h1>
      <h1 className="border-2 border-indigo-500/30 p-3 my-2">
        <p className="text-xl">【開発言語】</p>
        <p>★★★：TypeScript/JavaScript/Next.js/React、HTML/CSS</p>
        <p>★★：Laravel/php</p>
        <p>★★：SQL/MySQL/BigQuery</p>
        <p>★★：Shell/bash</p>
        <p>★★★：VBA</p>
        <p className="text-xl">【テストツール】</p>
        <p>Postman、Swagger、PictMaster、Charlse</p>
        <p className="text-xl">【クラウドサービス】</p>
        <p>Xserver、AWS、GCP、Firebaseをいろいろ試しています。</p>
      </h1>

      <h1 className="text-2xl text-center bg-indigo-600 text-white p-2">
        Get in Touch
      </h1>
      <h1 className="border-2 border-indigo-500/30 p-3 my-2">
        <a 
          className="text-2xl hover:text-indigo-300"
          href="https://zenn.dev/aibiz20sasaki"
          target="_blank" rel="noopener noreferrer"
        >
          Zennダッシュボード
        </a>
        <p>主に自分のメモ用にzennを使っています。</p>

        <div className="flex flex-row">
          <Image 
            src="/icons/github.svg"
            className="p-1 mx-1"
            alt="Icon"
            width={32}
            height={32}
          />
          <a
            className="text-2xl hover:text-indigo-300"
            href="https://github.com/ai-biz20-sasaki?tab=repositories"
            target="_blank" rel="noopener noreferrer"
          >
            Github
          </a>
        </div>       
        <p>aibizsasakiのリポジトリ</p>
        
        {/*
        <div className="flex flex-row">
          <Image 
            src="/icons/twitter.svg"
            className="p-1 mx-1"
            alt="Icon"
            width={32}
            height={32}
          />
          <a
            className="text-2xl hover:text-indigo-300"
            href="https://twitter.com/ai_biz20_sasak"
            target="_blank" rel="noopener noreferrer"
          >
            twitter
          </a>
        </div>
        <p>twitter aibizsasaki</p>
        */}

        <div className="flex flex-row">
          <Image 
            src="/icons/youtube.svg"
            className="p-1 mx-1"
            alt="Icon"
            width={32}
            height={32}
          />
          <a 
            className="text-2xl hover:text-indigo-300"
            href="https://www.youtube.com/@aibizsasaki/featured"
            target="_blank" rel="noopener noreferrer"
          >
            YouTube
          </a>
        </div>
        <p>youtube aibizsasaki</p>
      </h1>

    </div>    
  )
}
