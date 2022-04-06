import LeftSide from "./leftSide";
import RightSide from "./rightSide";

function RxJsApp() {

    return (
        <div className="">
            <div style={{ marginTop: '30px' }} className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <LeftSide />
                    </div>
                    <div className='col-md-6'>
                        <RightSide />
                    </div>
                </div>
            </div>
        </div>

    );
}
export default RxJsApp;
