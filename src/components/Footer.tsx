export default function Footer() {

  return (
    <>
      <footer
        id="footer"
        data-testid="footer" 
        className="fixed bottom-0 py-2 w-full flex items-center justify-center 
      bg-slate-100 dark:bg-slate-900 dark:text-white font-medium z-10"
        role="contentinfo"
      >
        <p>
          Made with <span className="text-red-400">&hearts;</span> by <a id="profile-link" data-testid="profile-link" href="https://www.linkedin.com/in/niubrandon/"className="text-purple-600 animate-pulse hover:text-lg">Brandon</a>
        </p>
      </footer>
    </>
  );
}