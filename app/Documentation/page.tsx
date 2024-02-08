"use client"
import Centrer from '@/components/Documentation/Centrer'
const articles = {
    introduction: [
      {
        id: 1,
        titre: 'Essentiel',
        description:
          'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
      },
      {
        id: 2,
        titre: 'What is Next.js?',
        description: "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations. Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration. Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.",
      },
    ],
    features: [
      {
        id: 1,
        titre: 'Routing	',
        description:"A file-system based router built on top of Server Components that supports layouts, nested routing, loading states, error handling, and more.",
      },
      {
        id: 2,
        titre: `Rendering`,
        description:"Client-side and Server-side Rendering with Client and Server Components. Further optimized with Static and Dynamic Rendering on the server with Next.js. Streaming on Edge and Node.js runtimes."      },
    ],
  };
export default function Documentation() {
  return (
    <div className="bg-gray-900">
      <main>
        <Centrer 
        subtitle={`Introduction`} titre={`Next.js pour débutant` } 
        description={'Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.'} 
        articles={articles}
        />

      </main>     
    </div>
  )
}
