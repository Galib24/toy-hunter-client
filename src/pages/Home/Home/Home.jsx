import Review from "../../Review/Review";
import SellerPart from "../../Seller part/SellerPart";
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
            <SellerPart></SellerPart>
            
        </div>
    );
};

export default Home;