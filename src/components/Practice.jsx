const Practice = () => {
  import {useState, useEffect} from "react"l


const UserAnalystics = ({setUserTimeSpend}) => {



useEffect (() =>{
  setTimeput (()=> {
setUserTimeSpend(...prev => prev +1)
} , 1000}
},[])}



}


export UserAnalystics;


import UserAnalystics form "./UserAnalystics;


const HomePage = () => {
const [userTimeSpend, setUserTimeSpend] =  useState(0);
const [showData, setShowData] = useState(false);

const handeClick = useCallback(()=>{


});

},[]);


return (

<div>
<h1>Home Page</h1>
<buton onClick={handleClick}> Show user Spend Data </button>
<UserAnalystics setUserTimeSpend={setUserTimeSpend} />

{
	showData && (
		<div>
		<p> User spends: {userTimeSpend} </p>
			</div>
		)
}
</div>
)

export HomePage;
  return (
    <>
      <h1>Testing Page</h1>
    </>
  );
};

export default Practice;
