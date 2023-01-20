import Rule1 from '../images/Rule-1.gif';
import Rule2 from '../images/Rule-2.gif';
import Rule3 from '../images/Rule-3.png';

export const RulePage = () => {
    return (
        <div>
            <div className="d-flex box p-3">
                <div className="flex-even p-2 d-flex flex-column align-items-center">
                    <div>Player X starts the game by placing an X on a 20-by-20 board.</div>
                    <img src={Rule1}/>
                </div>

                <div className="flex-even p-2 d-flex flex-column align-items-center">
                    <div>Player X and O take turns placing their moves on the board.</div>
                    <img src={Rule2} />
                </div>

                <div className="flex-even p-2 d-flex flex-column align-items-center">
                    <div>The first player to reach five moves in a row wins the game!</div>
                    <img src={Rule3} />
                </div>

            </div>
        </div>
    )

}

export default RulePage;
