import React from 'react';
import '../components/containers_css/Notice.css';
import Content from '../components/Content';


const Notice = () => {
    return (
        <div>
           <Content>
                <div className='background'>
                </div>
                
                <div className="scroll-downs">
                    <div className="mousey">
                    <div className="scroller">
                    </div>
                    </div>
                </div>
                
                <div className='Notice_content'>
                    <h4 id = 'notice'>Notice</h4>
                    <p>
                    <br/>
                    1.내용을 입력하세요
                    <br/>
                    2.내용을 입력하세요
                    <br/>
                    3.내용을 입력하세요
                    </p>
                </div>
           </Content>
        </div>
    );
};

export default Notice;