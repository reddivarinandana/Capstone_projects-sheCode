import { useState } from 'react';
import './Intro.css';
const Intro = () => {
  const [course, setCourse] = useState([]);
  const [topics, setTopics] = useState([]);
  const [subtopic, setSubtopic] = useState([]);
  const [subtopicClick, setSubtopicClick] = useState([false]);
  const [subTopicContent, setSubTopicContent] = useState([]);
  const [fullview, setFullView] = useState(false);
  //const [topic, setTopic] = useState("");
  //const [clickedId, setclickedId] = useState("");
  //const [data, setData] = useState("");
  // useEffect(()=>{
  //   fetchData();
  // },[])

  const displayCourse = (courseName) => {
    setTopics(courseName);
    console.log(courseName);
    fetch("http://localhost:5000/course").then((res) => {
      return res.json();
    }).then((res) => {
      setCourse(res);
      console.log(res);
    })
  }

  const displayTopic = (courseName) => {
    if(courseName === "Python"){
      fetch("http://localhost:5000/topics").then((res) => {
        return res.json();
      }).then((res) => {
        setTopics(res);
        console.log("test topics",res);
      })
    }else {
      setTopics([]);
    }
  }

  const displaySubtopic = (id) => {
    console.log("soumith");
    setSubtopicClick(!subtopicClick);
    if (subtopicClick) {
      fetch(`http://localhost:5000/subtopic/${id}`).then((res) => {
        return res.json();
      }).then((res) => {
        setSubtopic(res);
        console.log(res);
      })
    }
  }
  const displaySubtopicContent = (id) => {
    console.log("nanadana");
    setFullView(!fullview);
    fetch(`http://localhost:5000/subTopicContent/${id}`).then((res) => {
      return res.json();
    }).then((res) => {
      setSubTopicContent(res);
      console.log(res);
    })
  }


  return (


    <div>
      <div className="MainLayout">
        <div className="sideNavbar">
          <h4><img className="pic2" src="/resources/pic2.jpeg" alt="" /></h4>
          <h4><img className="image2" src="resources/livebboks.png" alt="" onClick={() => displayCourse()} /></h4>
          <h4 className="tools">Tools</h4>
          <h4><img className="image4" src="https://cdn-icons-png.flaticon.com/512/64/64572.png" alt="" /></h4>
        </div>
        {!fullview && <div className="NAVBAR">
          <div>
            <h2 className="align-left">Learn the ways of the future</h2>
            <p className="align-left">With Shecodes, learn Programming with Joy</p>
          </div>
          <div>
            <img className="navimage" src="https://kalvium.community/images/livebooks_hero_img.svg" alt="" />
          </div>
        </div>}
      </div>


      {!fullview && <div className='display'>
        <div className='coursedata'>
          <div className='a'>
            {
              course?.map(({ Course_Name}) =>
                <div className='coursediv'>
                  <div onClick={() => displayTopic(Course_Name)} id='course'>{Course_Name}</div>
                </div>
              )
            }
          </div>
        </div>
          {/* {
            data.filter(function(data){
              if(data.Topic_ID  == clickedId){
                return data;
              }
            }).map(function(data){
              return <div>{topic}</div>
            })
          } */}

        <div className='entire'>
          {
            topics?.map(({ Topic_Name,Topic_ID }) =>
              <div className='topics'>
                <img onClick={() => displaySubtopic(Topic_ID)} className="rhombus" src="/resources/rhomb.png" alt="" />
                <p className='topic'>{Topic_Name}</p>
                <div onClick={() => displaySubtopic(Topic_ID)} id="drop"><img className="downimage" src="/resources/down.png" alt="" />
                </div>

                {
                  subtopicClick && !fullview?

                    <div className='sub'>
                      {
                        subtopic?.map(({ SubTopic_Name, SubTopic_ID }) =>
                          <div className='subtopic'>
                            <img className="empty" src="/resources/empty.png" alt="" />
                            <p className='subTopic' onClick={() => displaySubtopicContent(SubTopic_ID)}>{SubTopic_Name} </p>

                          </div>)

                      }
                    </div> : " "
                }
              </div>
            )
          }
        </div>
      </div>}
    {fullview && <div>
        {
          subTopicContent?.map(({ SubTopic_Content }) =>
            <div>
              <div>{SubTopic_Content}</div>
            </div>
          )
        }
    </div>}
    </div>)
}
export default Intro;