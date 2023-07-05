// import React from "react";
// import { useState } from 'react';

// function SubtopicData(){
//     const [course, setCourse] = useState([]);
//     const [topics, setTopics] = useState([]);
//     const [subtopic, setSubtopic] = useState([]);
//     const [subtopicClick, setSubtopicClick] = useState([false]);
//     const [subTopicContent, setSubTopicContent] = useState([]);
//     const [fullview, setFullView] = useState(false);

//     const displaySubtopic = (id) => {
//         console.log("soumith");
//         setSubtopicClick(!subtopicClick);
//         if (subtopicClick) {
//           fetch(`http://localhost:5000/subtopic/${id}`).then((res) => {
//             return res.json();
//           }).then((res) => {
//             setSubtopic(res);
//             console.log(res);
//           })
//         }
//       }

//       const displaySubtopicContent = (id) => {
//         //console.log("nanadana");
//         setFullView(!fullview);
//         fetch(`http://localhost:5000/subTopicContent/${id}`).then((res) => {
//           return res.json();
//         }).then((res) => {
//           setSubTopicContent(res);
//           console.log(res);
//         })
//       }
//       console.log('nandana', arr[1].subtopic)

//     return(
//         <div className='topics'>
//         <img onClick={() => displaySubtopic(Topic_ID)} className="rhombus" src="/resources/rhomb.png" alt="" />
//         <p className='topic'>{Topic_Name}</p>
//         <div onClick={() => displaySubtopic(Topic_ID)} id="drop"><img className="downimage" src="/resources/down.png" alt="" />
//         </div>

//         {
//           subtopicClick && !fullview?

//             <div className='sub'>
//               {
//                 subtopic?.map(({ SubTopic_Name, SubTopic_ID }) =>
//                   <div className='subtopic'>
//                     <img className="empty" src="/resources/empty.png" alt="" />
//                     <p className='subTopic' onClick={() => displaySubtopicContent(SubTopic_ID)}>{SubTopic_Name} </p>

//                   </div>)

//               }
//             </div> : " "
//         }
//       </div>
//     )
// }

// export default function Data(){
//     return(
//         <section>
//             <SubtopicData/>
//         </section>
//     )
// }