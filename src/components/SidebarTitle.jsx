function SidebarTitle(props) {
    return (
      <main>
        <div>
          <div>
            <span className="inline-block w-[4px] h-[1.3em] bg-[#34d399] mr-[8px]"></span>
            <p className="inline-block font-bold tracking-wide font-raleway text-white text-2xl">
              {props.heading}
            </p>
          </div>
          <p className="font-normal tracking-wide font-raleway text-white">
            {props.body}
          </p>
        </div>
      </main>
    );
}

export default SidebarTitle;
