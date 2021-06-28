import Title from "components/shared/Title";
import Para from "components/shared/Para";

const Feature = ({ feature }) => {
  const { title, text, img, float } = feature;

  const renderContent = () => {
    let doc = "";
    if (float === "left") {
      doc = (
        <div className="h-screen lg:h-auto mx-0 lg:mx-4 py-4 lg:py-2 lg:my-16 px-8 xl:px-16 flex flex-col landscape:flex-row sm:flex-row items-start lg:items-center justify-between ">
          <div className="landscape:w-1/2 w-full sm:w-1/2 lg:w-6/12 h-full flex flex-col items-start justify-center ">
            <Title content={title} />
            <Para text={text} />
          </div>
          <div className="landscape:w-52 xs:w-full sm:w-52 lg:w-5/12 h-full flex flex-col  justify-center items-start lg:items-end mt-4 lg:mt-0">
            <img
              src={img.normal}
              alt={img.normal}
              className="hidden lg:block "
            />
            <img
              src={img.mobile}
              alt={img.mobile}
              className="block lg:hidden "
            />
          </div>
        </div>
      );
    } else {
      doc = (
        <div className="h-screen lg:h-auto mx-0 lg:mx-4 py-4 lg:py-2 lg:my-16 px-8 xl:px-16 flex flex-col-reverse landscape:flex-row sm:flex-row items-start lg:items-center justify-between ">
          <div className="landscape:w-52 xs:w-full sm:w-52 lg:w-5/12 h-full flex flex-col items-start justify-center mt-4 lg:mt-0">
            <img
              src={img.normal}
              alt={img.normal}
              className="hidden lg:block "
            />
            <img
              src={img.mobile}
              alt={img.mobile}
              className="block lg:hidden "
            />
          </div>
          <div className="landscape:w-1/2 w-full sm:w-1/2 lg:w-6/12 h-full flex flex-col  justify-center items-start pl-0 lg:pl-24 xl:pl-40  xl:items-start">
            <Title content={title} />
            <Para text={text} />
          </div>
        </div>
      );
    }
    return doc;
  };
  return renderContent();
};

export default Feature;
