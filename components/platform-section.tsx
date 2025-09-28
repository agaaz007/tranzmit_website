// platform-section.tsx

import { Badge } from "@/components/ui/badge"

// A simple Icon component for clarity
const Icon = ({ path }: { path: string }) => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

export function PlatformSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            The AI-first research platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Replace manual research methods with AI-moderated customer interviews.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* AI-moderated Interviews Card (Larger Top Card) */}
          <div className="group relative bg-neutral-100/60 dark:bg-zinc-900/50 p-8 rounded-2xl flex flex-col transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl cursor-pointer shadow-md">
            <h3 className="text-xl font-bold text-foreground mb-2">AI-moderated Interviews</h3>
            <p className="text-muted-foreground mb-6">
              Probe deeper with an AI interviewer that conducts personalized interviews with each customer, at scale.
            </p>
            <div className="bg-white dark:bg-black/50 rounded-xl p-6 flex-grow flex flex-col justify-between border border-neutral-200/50 dark:border-zinc-800/50 min-h-[250px]">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shrink-0 text-white">
                    <Icon path="M9.813 15.904L9 15l.813.904zM12 15l-.813.904L12 15zm2.187.904L15 15l-.813.904zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </div>
                  <div className="bg-neutral-100 dark:bg-zinc-800 rounded-xl rounded-tl-sm p-4 max-w-[80%]">
                    <p className="text-sm">How was creating an account on our platform?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-blue-500 text-white rounded-xl rounded-br-sm p-4 max-w-[80%]">
                    <p className="text-sm">It was alright.</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 opacity-70">User response</p>
            </div>
          </div>

          {/* Actionable Results Card (Larger Top Card) */}
          <div className="group relative bg-neutral-100/60 dark:bg-zinc-900/50 p-8 rounded-2xl flex flex-col transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl cursor-pointer shadow-md">
            <h3 className="text-xl font-bold text-foreground mb-2">Actionable results, instantly</h3>
            <p className="text-muted-foreground mb-6">
              Generate key takeaways, personas, and reveal top themes. Automatically.
            </p>
            <div className="bg-white dark:bg-black/50 rounded-xl p-6 flex-grow space-y-4 border border-neutral-200/50 dark:border-zinc-800/50 min-h-[250px]">
              <div className="bg-neutral-100 dark:bg-zinc-800/80 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">What do the power users think?</p>
              </div>
              <div className="bg-violet-500/10 dark:bg-violet-500/10 rounded-lg p-4 shadow-inner-lg transition-all duration-300 group-hover:shadow-violet-500/20 group-hover:shadow-lg">
                <Badge className="bg-violet-200 text-violet-800 dark:bg-violet-900/50 dark:text-violet-300 text-xs mb-2 border-none">
                  Insight
                </Badge>
                <p className="text-sm font-medium text-foreground">Power users miss collaboration features</p>
              </div>
            </div>
          </div>
          
          {/* Any Language Card (Smaller Bottom Card) */}
          <div className="group relative bg-neutral-100/60 dark:bg-zinc-900/50 p-8 rounded-2xl flex flex-col transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl cursor-pointer shadow-md">
            <h3 className="text-xl font-bold text-foreground mb-2">Any language</h3>
            <p className="text-muted-foreground mb-6">
              Translate and transcribe automatically between 28 languages.
            </p>
            <div className="bg-white dark:bg-black/50 rounded-xl p-6 flex-grow flex items-center justify-center border border-neutral-200/50 dark:border-zinc-800/50">
                <div className="text-center">
                    <Icon path="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A12.973 12.973 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
                    <p className="text-2xl font-bold mt-4">English → 한국어</p>
                </div>
            </div>
          </div>

          {/* Video, audio, or text Card (Smaller Bottom Card) */}
          <div className="group relative bg-neutral-100/60 dark:bg-zinc-900/50 p-8 rounded-2xl flex flex-col transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl cursor-pointer shadow-md">
            <h3 className="text-xl font-bold text-foreground mb-2">Video, audio, or text</h3>
            <p className="text-muted-foreground mb-6">
              Engage with customers through video recordings, audio chats, or text.
            </p>
            <div className="bg-white dark:bg-black/50 rounded-xl p-6 flex-grow flex items-center justify-center space-x-1.5 border border-neutral-200/50 dark:border-zinc-800/50">
                {[4, 6, 8, 3, 7, 5, 9, 4, 6, 8].map((h, i) => (
                  <div 
                    key={i} 
                    className="w-1.5 rounded-full bg-gradient-to-t from-blue-400 to-blue-300 dark:from-blue-500 dark:to-blue-400 transition-all duration-300 group-hover:opacity-80"
                    style={{ height: `${h * 6}px` }}
                  ></div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}