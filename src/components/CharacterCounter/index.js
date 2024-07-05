import {Component} from 'react'
import {v4} from 'uuid'
import UserInput from '../UserInput'

import {
  BgContainer,
  LeftPanel,
  InfoCardContainer,
  Info,
  UserInputList,
  RightPanel,
  CounterHeading,
  AddInputContainer,
  Input,
  AddInputButton,
  EmptyImage,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {
    userInputsList: [],
    userInput: '',
  }
  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }
  onAddUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newUserInput = {
      id: v4(),
      userEnteredText: userInput,
      textlength: userInput.length,
    }
    this.setState(prevestate => ({
      userInputsList: [...prevestate.userInputList, newUserInput],
      userInput: '',
    }))
  }
  renderUserInputs = () => {
    const {userInputList} = this.state
    return userInputList.length === 0 ? (
      <EmptyImage
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    ) : (
      userInputList.map(eachitem => (
        <UserInput key={eachitem.id} userInputDetails={eachitem} />
      ))
    )
  }
  render() {
    const {userInput} = this.state
    return (
      <BgContainer>
        <LeftPanel>
          <InfoCardContainer>
            <Info>
              Count the characters like a <br /> Boss..
            </Info>
          </InfoCardContainer>
          <UserInputList>{this.renderUserInputs()}</UserInputList>
        </LeftPanel>
        <RightPanel>
          <CounterHeading>Character Counter</CounterHeading>
          <AddInputContainer onSubmit={this.onAddUserInput}>
            <Input
              type="text"
              value={userInput}
              onChange={this.onChangeUserInput}
            />
            <AddInputButton>Add</AddInputButton>
          </AddInputContainer>
        </RightPanel>
      </BgContainer>
    )
  }
}

export default CharacterCounter
