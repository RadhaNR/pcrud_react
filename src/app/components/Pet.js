import React from 'react';

const Pet = (props) => {
    return (
        <div>
            {props.petList.map((pet, i) => {
                            return <div key={i}>
                                {pet.name} -- {pet.age}
                            </div>
                        })}
        </div>
    )
}
export default Pet;