import Title from "components/shared/Title";
import Para from "components/shared/Para";

const Feature = ({ feature }) => {
  const { title, text, img, float } = feature;

  const renderContent = () => {
    let doc = "";
    if (float === "left") {
      doc = (
        <>
          <div className="w-6/12 h-full flex flex-col items-start justify-center">
            <Title content={title} />
            <Para text={text} />
          </div>
          <div className="w-6/12 h-full flex flex-col  justify-center items-end">
            <img src={img.normal} alt={img.normal} />
          </div>
        </>
      );
    } else {
      doc = (
        <>
          <div className="w-6/12 h-full flex flex-col items-start justify-center">
            <img src={img.normal} alt={img.normal} />
          </div>
          <div className="w-6/12 h-full flex flex-col  justify-center items-end">
            <Title content={title} />
            <Para text={text} />
          </div>
        </>
      );
    }
    return doc;
  };
  return (
    <div className=" m-4 px-16 flex items-center min-h-screen">
      {renderContent()}
    </div>
  );
};

export default Feature;
