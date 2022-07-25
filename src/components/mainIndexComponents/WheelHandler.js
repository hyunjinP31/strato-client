import React, { useEffect, useRef } from "react";
import "antd/dist/antd.css";
import Dots from "./Dots";
import MainIndex from "./MainIndex";
import TopBtn from "./TopBtn";
import { useDispatch, useSelector } from 'react-redux';
import { setScroll } from "../../module/pageutils";

const Index = () => {
  const outerDivRef = useRef();
  const TopRef = useRef();
  const dispatch = useDispatch()
  const body = document.querySelector('body');
  body.classList.add('scrollHide');
 
  const utils = useSelector(state=>state.utils.utils);


  
  useEffect(() => {
    document.querySelector('.headerWrap').classList.add('onColor');
    
    const footer = document.querySelector('footer');
    body.classList.add('scrollHide');
    footer.classList.add('positioning');
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.
    
      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          dispatch(setScroll(2))
          //현재 1페이지
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          })
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지s
          dispatch(setScroll(3))
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          })
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          //현재 2페이지s
          outerDivRef.current.scrollTo({
            top: pageHeight * 3,
            left: 0,
            behavior: "smooth",
          })
          dispatch(setScroll(4))
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
          //현재 2페이지s
          outerDivRef.current.scrollTo({
            top: pageHeight * 4,
            left: 0,
            behavior: "smooth",
          })
          dispatch(setScroll(5));
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 5) {
          //현재 2페이지s
          outerDivRef.current.scrollTo({
            top: pageHeight * 5,
            left: 0,
            behavior: "smooth",
          })
          dispatch(setScroll(6));
        } else {
          // 현재 3페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 5,
            left: 0,
            behavior: "smooth",
          })
          dispatch(setScroll(6));
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
          dispatch(setScroll(1));
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
          dispatch(setScroll(1));
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          })
          dispatch(setScroll(2));
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          })
          dispatch(setScroll(3));
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 5) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 3,
            left: 0,
            behavior: "smooth",
          })
          dispatch(setScroll(4));
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 6) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 4,
            left: 0,
            behavior: "smooth",
          })
          dispatch(setScroll(5));
        } else {
          // 현재 마지막페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 5,
            left: 0,
            behavior: "smooth",
          })
          dispatch(setScroll(6));
        }
      }
      console.log(deltaY)
      if (outerDivRef.current !== undefined) {
        const footer = document.querySelector('footer');
        const maxHeight = outerDivRef.current.scrollHeight;
        const footerPositioning = document.querySelector('.positioning');

        if (pageHeight + scrollTop + footer.offsetHeight >= maxHeight && deltaY > 0) {
          footerPositioning.style.bottom = 0;
          outerDivRef.current.scrollTo({
            top: scrollTop + footer.offsetHeight,
            left: 0,
            behavior: 'smooth',
          });
          dispatch(setScroll(6));
        } else if (deltaY < 0 && scrollTop === pageHeight * 5 + footer.offsetHeight) {
          footerPositioning.style.bottom = -50+'%';
          outerDivRef.current.scrollTo({
            top: pageHeight * 5,
            left: 0,
            behavior: 'smooth',
          });
          dispatch(setScroll(6));
        }
      }
    };
    const OnBtn = () => {
      const footerPositioning = document.querySelector('.positioning');
      outerDivRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      footerPositioning.style.bottom = -50+'%';
      dispatch(setScroll(1))
    }

    const outerDivRefCurrent = outerDivRef.current;
    const topRefBtn = TopRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    topRefBtn.addEventListener("click", OnBtn);

    return () => {
      body.classList.remove('scrollHide');
      footer.classList.remove('positioning')
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
      topRefBtn.removeEventListener("click", OnBtn);
      document.querySelector('.headerWrap').classList.remove('onColor');
    };

    //eslint-disable-next-line
  }, []);

  return (
    <>
        <section ref={outerDivRef} className="outer">
          <Dots scrollIndex={utils.scrollindex} />
          <TopBtn scrollIndex={utils.scrollindex} TopRef={TopRef}/>
          <MainIndex />
        </section>
    </>
  );
};

export default Index;