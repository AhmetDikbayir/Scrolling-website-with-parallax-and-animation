import React from 'react'
import Typical from 'react-typical'

const TextBoxTwo = () => {
    return (
        <div className='text-box'>
            {/*defined animated typing here*/}
            <Typical
                steps={['Where', 1000, 'Where should', 1000, 'Where should you', 1000, 'Where should you visit?', 2000]}
                //defined animation infinity
                loop={Infinity}
                //defined the HTML tag which wrap the text
                wrapper="h3"
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloribus accusantium, quam odio
            repudiandae mollitia eos sapiente quo labore magnam, dignissimos praesentium blanditiis ratione error
            expedita, incidunt rerum corrupti modi enim commodi maxime veniam! Eius repellendus voluptates ducimus
            perspiciatis officiis adipisci quibusdam amet, officia omnis quas id minus ipsam, aliquam qui voluptas quo
            veritatis dolores vero magnam inventore sed numquam dignissimos a nisi. Tempore dolorem provident illo natus
            velit temporibus fugiat odio aperiam a sunt et harum autem sequi officiis quos distinctio quis nihil, modi
            eveniet commodi animi non accusantium! Nesciunt ut voluptatibus cumque et doloribus nihil impedit odio sed.
        </p>
        </div>
    )
}

export default TextBoxTwo