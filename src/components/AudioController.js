const AudioController = ({ initialModal, changeRangeVolume, mutedFX, changeVolume, muted, FXmuted }) => {

    return (
        <div style={initialModal ? { display: 'none' } : { position: 'absolute', right: 15, top: 10, textAlign: 'right', display: 'block' }} className='allOptions animate__animated animate__fadeIn'>
            <svg className="optionConfig" width="70px" height="70px" viewBox="0 0 32 32" id="Stock_cut" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                <g>
                    <path stroke="#ffffff" fill="none" d="M31,19v-6h-4.425 c-0.252-0.888-0.611-1.729-1.065-2.51L29,7l-4-4l-3.49,3.49C21.028,6.21,20.525,5.967,20,5.761V1h-8v4.761   c-0.525,0.205-1.028,0.449-1.51,0.728L7,3L3,7l3.49,3.49C6.036,11.271,5.676,12.112,5.425,13H1v6h4.425   c0.252,0.888,0.611,1.729,1.065,2.51L3,25l4,4l3.49-3.49c0.482,0.28,0.986,0.523,1.51,0.728V31h8v-4.761   c0.525-0.205,1.028-0.449,1.51-0.728L25,29l4-4l-3.49-3.49c0.454-0.781,0.813-1.622,1.065-2.51H31z" />
                    <circle cx="16" cy="16" fill="#ffffff" r="5" stroke="#ffffff" />
                </g>
            </svg>
            <div className='optionAudio'>
                <div className='backgroundSound'>
                    <input className='range' id='range' min='0' max='100' onChange={(e) => { changeRangeVolume(e) }} type='range'></input>

                    {!muted ?
                        <svg onClick={() => { changeVolume() }} className='audio' width="50px" height="50px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" >
                            <path d="M1129.432 113v1694.148H903.545l-451.772-451.773V564.773L903.545 113h225.887Zm542.545 248.057C1832.017 521.097 1920 733.882 1920 960.107c0 226.226-87.983 438.898-248.023 598.938l-79.851-79.85c138.694-138.582 214.93-323.018 214.93-519.087 0-196.183-76.236-380.506-214.93-519.2ZM338.83 564.773v790.602H169.415C75.672 1355.375 0 1279.703 0 1185.96V734.187c0-93.742 75.672-169.414 169.415-169.414H338.83Zm1093.922 36.085c95.776 97.018 148.407 224.644 148.407 359.16 0 134.628-52.631 262.253-148.407 359.272l-80.303-79.174c74.656-75.897 115.767-175.4 115.767-280.099 0-104.585-41.111-204.088-115.767-279.986Z" />
                        </svg> : <svg onClick={() => { changeVolume() }} width="50px" height="50px" className='audio' viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                            <path d="M1129.433 113v1694.15H903.547l-451.774-451.773V564.773L903.547 113h225.886ZM338.83 564.773v790.604H169.415c-92.806 0-167.9-74.166-169.392-166.609L0 1185.962V734.188c0-92.805 74.166-167.9 166.608-169.392l2.807-.023H338.83ZM1789.951 635 1920 764.926 1724.988 959.94 1920 1154.95 1789.951 1285l-194.89-195.012L1400.05 1285 1270 1154.951l195.012-195.012L1270 764.926 1400.049 635l195.012 195.012L1789.951 635Z" />
                        </svg>
                    }
                </div>
                <div style={{ position: 'relative' }} className='groupFX'>
                    <h1 className='FXSound' onClick={() => { mutedFX() }}>FX</h1>
                    <div className={FXmuted ? 'barFXSoundOn' : 'barFXSoundOff'}></div>
                </div>
            </div>

        </div>
    )
}

//Poner un audioState en App donde este el volumen que se elige y de ahi se cambia el volumen

export default AudioController