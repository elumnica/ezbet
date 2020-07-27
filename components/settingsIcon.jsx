import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.164 14.853l1.33 2.295 2.322-.935.454.351a5.37 5.37 0 001.278.75l.536.216.342 2.47h2.651l.343-2.478.528-.22c.455-.19.89-.444 1.287-.753l.454-.35 2.321.934 1.326-2.287-1.988-1.55.092-.582c.034-.216.048-.46.048-.714 0-.235-.023-.463-.053-.765l-.057-.57 1.958-1.526-1.326-2.287-2.321.935-.454-.351a5.368 5.368 0 00-1.278-.75l-.536-.216L13.08 4h-2.652l-.343 2.478-.528.22c-.48.2-.917.442-1.275.728l-.456.365-2.331-.939L4.169 9.14l1.984 1.546-.087.578a4.89 4.89 0 00-.063.737c0 .235.022.463.053.765l.056.57-1.948 1.518zM3.173 9.63c-.165-.15-.225-.39-.105-.585l1.8-3.105c.12-.195.345-.27.555-.195l2.235.9c.45-.36.975-.645 1.515-.87l.33-2.385a.464.464 0 01.45-.39h3.6c.225 0 .405.165.45.375l.33 2.385c.555.225 1.05.525 1.515.885l2.235-.9c.21-.075.435 0 .555.195l1.8 3.105c.12.195.06.45-.105.585l-1.905 1.485c0 .014.002.027.004.04.028.286.056.559.056.845 0 .285-.015.585-.06.87l1.905 1.485c.165.15.225.39.105.585l-1.8 3.105c-.12.195-.345.27-.555.195l-2.235-.9c-.465.36-.975.66-1.515.885l-.33 2.385a.464.464 0 01-.45.39h-3.6a.465.465 0 01-.45-.375l-.33-2.385a6.366 6.366 0 01-1.515-.885l-2.235.9a.459.459 0 01-.555-.195l-1.8-3.105a.459.459 0 01.09-.585l1.905-1.485-.005-.04A8.347 8.347 0 015.003 12c0-.3.03-.585.075-.885L3.173 9.63zm8.58-1.195A3.574 3.574 0 0115.318 12a3.574 3.574 0 01-3.565 3.565A3.574 3.574 0 018.188 12a3.574 3.574 0 013.565-3.565zM14.318 12a2.574 2.574 0 00-2.565-2.565A2.574 2.574 0 009.188 12a2.574 2.574 0 002.565 2.565A2.574 2.574 0 0014.318 12z"
        fill="#131C3E"
      />
    </Svg>
  )
}

export default SvgComponent
