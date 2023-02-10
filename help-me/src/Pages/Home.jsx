import React from 'react';
import './Home.css'
import profile from '../profile.png'
import profile2 from '../profile2.png'
import { useHref } from 'react-router-dom';

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
                <div className='texts1' onClick={()=>{
                    window.location.href = "https://github.com/korlkm"
                }}>
                    <img className='profile' src={profile}></img>
                    <div className='name'>이경민</div>
                    <div className='tag-and'>And</div>
                    <div className='text'>
                        개발하기싫어
                    </div>
                </div>
                <div className='texts2'>
                    <img className='profile' src={profile2}></img>
                    <div className='name'>김명준</div>
                    <div className='tag-web'>Web</div>
                    <div className='text'>같이 Vue.js공부 해보실분?? 제가 알려드릴수 있어요 !! 편하게 연락주세요</div>
                </div>
                <div className='texts3'>
                    <img className='profile' src={profile2}></img>
                    <div className='name'>장범준</div>
                    <div className='tag-sever'>Web</div>
                    <div className='text'>같이 firebase 공부 해보실분 있나욧??? firebase공부하면 풀스택 쌉가능임 ㅋㅋ!!</div>
                </div>
                <div className='texts4'>
                    <img className='profile' src={profile2}></img>
                    <div className='name'>황주완</div>
                    <div className='tag-ai'>Ai</div>
                    <div className='text'>같이 ai챗봇 공부해보실분 있나요?? ai에 대해서궁금하신분들 연락 주세요!!</div>
                </div>
                <div className='texts5'>
                    <img className='profile' src={profile2}></img>
                    <div className='name'>최시훈</div>
                    <div className='tag-ios'>Ios</div>
                    <div className='text'>애플 좋아 애플짱
                    </div>
                </div>
                <div className='texts6'>
                    <img className='profile' src={profile2}></img>
                    <div className='name'>모성현</div>
                    <div className='tag-deg'>Degsign</div>
                    <div className='text'>좋은 디자인 초안 있습니다 같이 프로젝트 하실분 연락 ㄱㄱ
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;