import Review from "../../Review/Review";
import TabPart from "../../Tabpart/TabPart";
import Banner from "../Banner/Banner";
import ExcitedToy from "../ExcitedToy/ExcitedToy";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ExcitedToy></ExcitedToy>
            <TabPart></TabPart>
            <Review></Review>
            
        </div>
    );
};

export default Home;