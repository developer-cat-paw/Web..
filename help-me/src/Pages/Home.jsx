import React from 'react';
import './Home.css'
import profile from '../profile.png'
import profile2 from '../profile2.png'

const Home = () => {
    return (
        <div>
            <div className='bg'></div>
            <div className='doc'>
                <div className='and'>And</div>
                <div className='ios'>Ios</div>
                <div className='web'>Web</div>
                <div className='sever'>Sever</div>
                <div className='ai'>Ai</div>
                <div className='deg'>Degsign</div>
            </div>
            <div>
                <div className='texts1'>
                    <img className='profile' src={profile}></img>
                    <div className='name'>이경민</div>
                    <div className='tag-and'>And</div>
                    <div className='text'>
                        개발하기싫어 개발하기싫어 개발하기싫어 개발하기싫어
                        개발하기싫어 개발하기싫어 개발하기싫어 개발하기싫어
                        개발하기싫어 개발하기싫어 개발하기싫어 개발하기싫어
                        개발하기싫어 개발하기싫어 개발하기싫어 개발하기싫어
                        개발하기싫어 개발하기싫어 개발하기싫어 개발하기싫어
                        개발하기싫어 개발하기싫어 개발하기싫어 개발하기싫어
                    </div>
                </div>
                <div className='texts2'>
                    <img className='profile' src={profile2}></img>
                    <div className='name'>김명준</div>
                    <div className='tag-web'>Web</div>
                    <div className='text'>안녕안녕 ~~</div>
                </div>
                <div className='texts3'>
                    <img className='profile' src={profile2}></img>
                    <div className='name'>장범준</div>
                    <div className='tag-sever'>Web</div>
                    <div className='text'>안녕 나는 대소고 백앤드 1짱 나한테 파이버베이스 배울 사람 일로와 ~~</div>
                </div>
                <div className='texts4'>
                    <img className='profile' src={profile2}></img>
                    <div className='name'>황주완</div>
                    <div className='tag-ai'>Ai</div>
                    <div className='text'>안녕 나는 남자가 좋아 나랑 공부할사람 ~?</div>
                </div>
                <div className='texts5'>
                    <img className='profile' src={profile2}></img>
                    <div className='name'>최시훈</div>
                    <div className='tag-ios'>Ios</div>
                    <div className='text'>
                        
                        
                    </div>
                </div>
                <div className='texts6'>
                <img className='profile' src={profile2}></img>
                    <div className='name'>모성현</div>
                    <div className='tag-deg'>Degsign</div>
                    <div className='text'>나는 트렌스젠더가 좋아 나랑 섹스 할사람?????
                        DM !!!!!!!! 빨리 !! 나급해 !!!!!!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;