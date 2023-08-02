function EmailField() {
  return (
    <>
        <main>
            <input type="text" className="outline-none py-2 px-4 active:[box" placeholder="Enter your email"/>
            <button className="bg-emerald-500 text-black py-2 px-4 hover:bg-emerald-700 active:[transform:translateY(4px)] transition-transform duration-300 ease-linear">Get Started</button>
        </main>
    </>
  );
}

export default EmailField;
