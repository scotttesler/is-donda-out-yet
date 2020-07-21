function Index() {
  return (
    <div className="parent">
      <div className="child">No</div>
      <div>
        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">
            DONDA coming this Friday{" "}
            <a href="https://t.co/HGibF3PHYf">pic.twitter.com/HGibF3PHYf</a>
          </p>
          &mdash; ye (@kanyewest){" "}
          <a href="https://twitter.com/kanyewest/status/1285433509142650881?ref_src=twsrc%5Etfw">
            July 21, 2020
          </a>
        </blockquote>{" "}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>
      </div>

      <style jsx global>{`
        @font-face {
          font-family: "VCROSDMono";
          src: url("/fonts/VCR_OSD_MONO_1.001.ttf");
        }
      `}</style>

      <style jsx>{`
        .parent {
          display: grid;
          font-family: VCROSDMono, Helvetica, Arial, sans-serif;
          place-items: center;
          overflow: auto;
          resize: both;
        }

        .child {
          color: #ababab;
          font-size: 2rem;
          padding: 14px 0;
        }
      `}</style>
    </div>
  );
}

export default Index;
