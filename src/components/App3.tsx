import {useState, Fragment, useEffect, ReactElement} from "react";

// 배열
function App3() {
    const [img, setImg] = useState<string[]>()
    const images: string[] = [
        "https://img.megabox.co.kr/SharedImg/2026/01/15/xlMKoNV9stZD0rpyynZmnvRS2zDbQtyp_420.jpg",
        "https://img.megabox.co.kr/SharedImg/2025/11/26/6tAiMzbHCFRIda2pnPZxeJh7lzX2AaIB_420.jpg",
        "https://img.megabox.co.kr/SharedImg/2026/01/16/QUGtsQ9CVj2p48W7XxSAHJSycF4Xxbuv_420.jpg",
        "https://img.megabox.co.kr/SharedImg/2026/01/15/CV8G7PcHhzzdmaqHtsgHZBpMIdIgfLth_420.jpg",
        "https://img.megabox.co.kr/SharedImg/2026/01/22/lusrguKzQRdoxZeuKowjyE1HWp5EIh6d_420.jpg"
    ]
    useEffect(() => {
        setImg(images)
    })
    /*
         Element     DOM (document.createElement()) 일반 태그
         JSX.Element  JSX변환
         ReactElement React 콤포넌트 반환
     */
    /*const html:ReactElement[]|undefined=img?.map((movie:string):ReactElement =>
        <img
            src={movie}
            style={{"width":"150px","height":"200px"}}
            key={movie}
        />
    )*/
    // 타입를 사용하지 않는다  ReactElement , JSX.Element
    const html = img?.map((movie: string) =>
        <img
            src={movie}
            style={{"width": "150px", "height": "200px"}}
            key={movie}
        />
    )

    return (
        <Fragment>
            {html}
        </Fragment>
    )
}

export default App3;