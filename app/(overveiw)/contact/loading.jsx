import ClipLoader from "react-spinners/ClipLoader";
export default function  ClipLoaderSpinner  ()  { 
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };
      return  (<ClipLoader
        color={"#ffffff"}
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />)
    }