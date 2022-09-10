import './CommunityPage.scss';
import { AiTwotoneStar } from "react-icons/ai";
import UserCard from '../../components/UserCard/UserCard';






function CommunityPage() {
  return (
    <div className='community'>
     <h1 className='community__title'>Get inspired by people in your community!</h1>

     <UserCard linkName={"user1"}/>
     <UserCard linkName={"user2"}/>
     <UserCard linkName={"user3"}/>
     <UserCard linkName={"user4"}/>
   
    </div>
  );
}

export default CommunityPage;
