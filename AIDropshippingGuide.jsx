import { CheckCircle } from 'lucide-react';

const AIDropshippingGuide = () => {
  const Section = ({ id, title, children }) => {
    return (
      <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <div className="p-4 bg-blue-50 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-blue-800">{title}</h2>
        </div>
        <div className="p-4 bg-white">
          {children}
        </div>
      </div>
    );
  };
  
  const Step = ({ number, title, description }) => (
    <div className="flex items-start mb-4">
      <div className="flex-shrink-0 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
        {number}
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
  
  const BenefitItem = ({ children }) => (
    <div className="flex items-start mb-2">
      <CheckCircle size={18} className="flex-shrink-0 text-green-500 mr-2 mt-1" />
      <span className="text-gray-700">{children}</span>
    </div>
  );
  
  const ToolComparison = ({ category, tools }) => (
    <div className="mb-4">
      <h3 className="font-semibold text-gray-800 mb-2">{category}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {tools.map((tool, index) => (
          <div key={index} className="border border-gray-200 rounded p-3 bg-gray-50">
            <h4 className="font-medium text-gray-800">{tool.name}</h4>
            <p className="text-sm text-gray-600">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
  const CostItem = ({ item, cost, description }) => (
    <div className="flex justify-between border-b border-gray-200 py-2">
      <div className="flex-1">
        <div className="font-medium text-gray-800">{item}</div>
        {description && <div className="text-sm text-gray-600">{description}</div>}
      </div>
      <div className="text-right font-medium">{cost}</div>
    </div>
  );
  
  return (
    <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-sm">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">AIデザイン活用型無在庫EC事業戦略</h1>
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-gray-800">本資料では、AI技術を活用したデザイン生成と無在庫販売方式を組み合わせた新規事業モデルの構築方法を解説します。初期投資を最小化しながら多様な製品ラインナップを展開するための戦略および実行計画について説明します。</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Section id="ai-design" title="① AIによるデザイン生成プロセス">
          <p className="mb-4 text-gray-700">AI画像生成技術を活用した効率的なデザイン制作ワークフローを以下に示します：</p>
          
          <Step 
            number="1" 
            title="市場分析とターゲット設定" 
            description="製品カテゴリと顧客セグメントを明確に定義し、市場機会を特定"
          />
          <Step 
            number="2" 
            title="プロンプトエンジニアリング" 
            description="AIに適切な指示を与えるための最適化されたプロンプト設計"
          />
          <Step 
            number="3" 
            title="スケーラブルな生成プロセス" 
            description="バッチ処理による複数バリエーションの効率的な生成（100～500デザイン/日）"
          />
          <Step 
            number="4" 
            title="品質管理と選別" 
            description="商業利用基準に基づく品質評価と市場適合性の検証"
          />
          <Step 
            number="5" 
            title="パフォーマンス測定" 
            description="KPI設定に基づく市場反応の定量的分析と最適化"
          />
        </Section>
        
        <Section id="dropshipping" title="② 無在庫販売方式の事業優位性">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <BenefitItem>資本効率の最大化（初期投資の最小化）</BenefitItem>
              <BenefitItem>製品ポートフォリオの多様化による市場リスク分散</BenefitItem>
              <BenefitItem>在庫リスクの完全排除によるキャッシュフロー最適化</BenefitItem>
              <BenefitItem>物流コストの変動費化による固定費削減</BenefitItem>
            </div>
            <div>
              <BenefitItem>製品ライフサイクル管理の柔軟性向上</BenefitItem>
              <BenefitItem>マルチマーケット展開によるスケーラビリティ</BenefitItem>
              <BenefitItem>業務プロセスの自動化による人的リソース最適配分</BenefitItem>
              <BenefitItem>迅速な事業規模拡大と市場適応力の強化</BenefitItem>
            </div>
          </div>
        </Section>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Section id="automation" title="③ 自動化販売・物流システム構成">
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-200" />
            
            <div className="relative pl-10 pb-6">
              <div className="absolute left-2 w-4 h-4 bg-blue-500 rounded-full" />
              <h3 className="font-medium text-gray-900">受注処理</h3>
              <p className="text-gray-600">顧客注文データの自動キャプチャとトランザクション処理</p>
            </div>
            
            <div className="relative pl-10 pb-6">
              <div className="absolute left-2 w-4 h-4 bg-blue-500 rounded-full" />
              <h3 className="font-medium text-gray-900">API連携</h3>
              <p className="text-gray-600">ECプラットフォームとプリントオンデマンド事業者間のシームレスなデータ転送</p>
            </div>
            
            <div className="relative pl-10 pb-6">
              <div className="absolute left-2 w-4 h-4 bg-blue-500 rounded-full" />
              <h3 className="font-medium text-gray-900">製造プロセス</h3>
              <p className="text-gray-600">デザインデータに基づくオンデマンド生産工程の実行</p>
            </div>
            
            <div className="relative pl-10 pb-6">
              <div className="absolute left-2 w-4 h-4 bg-blue-500 rounded-full" />
              <h3 className="font-medium text-gray-900">物流管理</h3>
              <p className="text-gray-600">3PL連携による効率的な配送プロセスと追跡情報の自動更新</p>
            </div>
            
            <div className="relative pl-10">
              <div className="absolute left-2 w-4 h-4 bg-blue-500 rounded-full" />
              <h3 className="font-medium text-gray-900">CRMサイクル</h3>
              <p className="text-gray-600">自動化されたカスタマーコミュニケーションとフィードバック収集</p>
            </div>
          </div>
        </Section>
        
        <Section id="shopify" title="⑤ Shopify活用による初期コスト最適化">
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <h3 className="font-medium text-blue-800 mb-2">プラットフォーム導入フェーズ</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>無料トライアル期間（14日間）の活用によるプラットフォーム構築と技術検証</li>
              <li>初期運用期間（150円/月）での市場検証と商品最適化</li>
              <li>基本プラン（$32/月）での機能限定的なスケーリングフェーズ</li>
            </ul>
          </div>
          
          <h3 className="font-medium text-gray-800 mb-2">コスト効率化戦略</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-gray-50 p-3 rounded">
              <h4 className="font-medium text-gray-800">アプリケーション選定最適化</h4>
              <p className="text-sm text-gray-600">無償ソリューションの優先活用とROI分析に基づく有償アプリ導入</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <h4 className="font-medium text-gray-800">テンプレート活用</h4>
              <p className="text-sm text-gray-600">標準テーマの効率的カスタマイズによる開発コスト抑制</p>
            </div>
          </div>
        </Section>
      </div>

      <Section id="tools" title="④ 技術ソリューション比較分析">
        <ToolComparison 
          category="AIデザイン生成プラットフォーム" 
          tools={[
            { name: "Midjourney", description: "高解像度品質と詳細なスタイル指定、商用利用権対応" },
            { name: "DALL-E", description: "自然言語理解力が高く、直感的プロンプト作成が可能" },
            { name: "Stable Diffusion", description: "オンプレミス実行可能でカスタマイズ性とコスト効率に優れる" }
          ]} 
        />
        
        <ToolComparison 
          category="商品モックアップソリューション" 
          tools={[
            { name: "Placeit", description: "多数のテンプレートと直感的インターフェース、高速プロトタイピング" },
            { name: "Printful Mockup Generator", description: "PODワークフローとの統合性と実際の製品仕様に基づく正確性" },
            { name: "Smartmockups", description: "高品質レンダリングと複数アングル対応、高度な編集機能" }
          ]} 
        />
        
        <ToolComparison 
          category="オンデマンド製造パートナー比較" 
          tools={[
            { name: "Printful", description: "製品多様性、Shopify連携性、在庫管理API、グローバル展開対応" },
            { name: "Printify", description: "製造業者選択肢と価格最適化、品質管理システム" },
            { name: "SPOD", description: "欧州市場向け最適化、高速納品体制、持続可能性対応" }
          ]} 
        />
      </Section>
      
      <Section id="costs" title="⑥ コスト構造分析と収益性評価">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">初期投資・運用コスト（月次）</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <CostItem 
                item="ECプラットフォーム" 
                cost="3,000円" 
                description="初期フェーズでは150円/月から段階的に移行" 
              />
              <CostItem 
                item="AI生成ツール利用料" 
                cost="2,000〜5,000円" 
                description="サブスクリプションモデル、使用量に応じて変動" 
              />
              <CostItem 
                item="ドメイン・インフラ" 
                cost="約1,500円" 
                description="年間契約の月次按分" 
              />
              <CostItem 
                item="マーケティング予算" 
                cost="10,000〜30,000円" 
                description="初期市場検証・顧客獲得コスト" 
              />
              <div className="flex justify-between pt-2 font-semibold text-blue-800">
                <div>合計（最小構成時）</div>
                <div>13,650円/月</div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">損益分岐点分析</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <CostItem item="平均販売単価" cost="3,500円" />
              <CostItem item="変動費（製造・物流）" cost="1,800円" />
              <CostItem item="限界利益" cost="1,700円" />
              <CostItem item="固定費合計" cost="8,000円" />
              <div className="flex justify-between pt-2 font-semibold text-blue-800">
                <div>収益化閾値</div>
                <div>4.7単位/月</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">※算出式：固定費合計÷限界利益=損益分岐点販売数量</p>
          </div>
        </div>
      </Section>

      <Section id="conclusion" title="事業展開ロードマップ">
        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg">
          <div className="flex items-start mb-3">
            <div className="flex-shrink-0 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
              1
            </div>
            <div>
              <h3 className="font-medium text-blue-800">デザイン資産形成フェーズ</h3>
              <p className="text-gray-700">AI技術を活用した商品ポートフォリオの構築と市場適合性評価</p>
            </div>
          </div>
          
          <div className="flex items-start mb-3">
            <div className="flex-shrink-0 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
              2
            </div>
            <div>
              <h3 className="font-medium text-blue-800">小規模市場検証</h3>
              <p className="text-gray-700">最小限の予算配分による複数商品の市場反応測定と分析</p>
            </div>
          </div>
          
          <div className="flex items-start mb-3">
            <div className="flex-shrink-0 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
              3
            </div>
            <div>
              <h3 className="font-medium text-blue-800">データ駆動型最適化</h3>
              <p className="text-gray-700">収益性指標の分析に基づく製品ラインナップの最適化と改良</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
              4
            </div>
            <div>
              <h3 className="font-medium text-blue-800">資源集中と事業拡大</h3>
              <p className="text-gray-700">実証された高収益商品への予算再配分と関連市場への水平展開</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium text-gray-800 mb-2">KPI設定</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-white p-3 rounded shadow-sm">
              <h4 className="font-medium text-blue-800">製品パフォーマンス</h4>
              <ul className="text-sm text-gray-600 list-disc pl-5 mt-1">
                <li>商品別転換率</li>
                <li>平均注文単価</li>
                <li>商品別限界利益率</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <h4 className="font-medium text-blue-800">マーケティング効率</h4>
              <ul className="text-sm text-gray-600 list-disc pl-5 mt-1">
                <li>顧客獲得コスト</li>
                <li>ROAS（広告投資収益率）</li>
                <li>セグメント別CVR</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <h4 className="font-medium text-blue-800">運用効率</h4>
              <ul className="text-sm text-gray-600 list-disc pl-5 mt-1">
                <li>製品開発リードタイム</li>
                <li>発注〜配送タイムライン</li>
                <li>カスタマーサービスコスト</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AIDropshippingGuide;