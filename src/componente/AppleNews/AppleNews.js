// import React, { Component } from "react";


// // https://www.googleapis.com/youtube/v3/search?key=AIzaSyB4xNW_TeLDTO9tKxmHQAZskoy9Na0sxR0&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=1

// class AppleNews extends Component {
//   constructor() {
//     super();
//     this.state = {
//         AppleNews : [],
//     };
//   }

//   componentDidMount() {
//     fetch(
//       // "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBv_MveWxmNKF-fAAEDIy3qAIWtt0-YM1M&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6"
//       //  News
//       "https://newsapi.org/v2/everything?q=apple&from=2021-07-16&to=2021-07-16&sortBy=recentfirst&order=date&pageSize=6&apiKey=1fa8ad0917f34bc39e500f1617725967"
      
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         const AppleNews = data.articles;
//         this.setState({ AppleNews });
//       });
//   }

//   render() {
//     return (
//       <div className="AppleNewsWrapper">
//         <div className="container">
//           <div className="row h-100 align-items-center justify-content-center text-center">
//             <div className="col-12">
//               <div className="title-wraper bold video-title-wrapper">
//                 News Feed
//               </div>
//             </div>
//             {this.state.AppleNews.map((singleNews, i) => {
//               let NewsId = singleNews.url;
//               // let vidLink = `https://newsapi.org/v2/everything?q=${vidId}`;
//               let NewsWrapper = (
//                 <div key={i} className="col-sm-12 col-md-4">
//                   <div className="singleNewsWrapper">
//                     <div className="NewsInfoWrapper">
//                       <a href={NewsId} target="_blank">
//                         <img src={singleNews.urlToImage} />
//                       </a>
//                     </div>
//                     {/* <div className="NewsInfoWrapper"> */}
//                       <div className="NewsTitle">
//                         <a href={ NewsId} target="_blank">
//                           {singleNews.title}
//                         </a>
//                       </div>
//                       <div className="NewsDesc">
//                         {singleNews.description}
//                       </div>
//                   </div>
//                 </div>
//                 // </div>
//               );
//               return NewsWrapper;
//             })}

//             {this.NewsWrapper}
//           </div>
//         </div>
//       </div>
// //     );
// //   }
// // }

// // export default AppleNews;

// Function based
// import  React,{useState,useEffect} from 'react';

// function AppleNews  ()  {
//     const [AppleNews,setAppleNews]=useState([]);
//     useEffect(()=>{
//         fetch(
//             "https://newsapi.org/v2/everything?q=apple&from=2021-07-16&to=2021-07-16&sortBy=recentfirst&order=date&pageSize=6&apiKey=1fa8ad0917f34bc39e500f1617725967"
//         )
//         .then((response) => response.json())
//       .then((data) => {
//         const AppleNews = data.articles;
//         setAppleNews(AppleNews)
//       });
//     },[])
//     console.log(AppleNews)
//     return (
//         <div className="AppleNewsWrapper">
//         <div className="container">
//           <div className="row h-100 align-items-center justify-content-center text-center">
//             <div className="col-12">
//               <div className="title-wraper bold video-title-wrapper">
//                 News Feed
//               </div>
//             </div>
//             {AppleNews.map((singleNews) => {
//               let NewsId = singleNews.url;
//               // let vidLink = `https://newsapi.org/v2/everything?q=${vidId}`;
//               let NewsWrapper = (
//                 <div className="col-sm-12 col-md-4">
//                   <div className="singleNewsWrapper">
//                     <div className="NewsInfoWrapper">
//                       <a href={NewsId} target="_blank">
//                         <img src={singleNews.urlToImage} />
//                       </a>
//                     </div>
//                     {/* <div className="NewsInfoWrapper"> */}
//                       <div className="NewsTitle">
//                         <a href={ NewsId} target="_blank">
//                           {singleNews.title}
//                         </a>
//                       </div>
//                       <div className="NewsDesc">
//                         {singleNews.description}
//                       </div>
//                   </div>
//                 </div>
//                 // </div>
//               );
//               return NewsWrapper;
//             })}
//           </div>
//         </div>
//       </div>
//     );
// }

// export default AppleNews;

