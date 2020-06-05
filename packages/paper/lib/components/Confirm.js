import React, {Component} from 'react'
import { Portal, Dialog, Button } from 'react-native-paper'
import { ScrollView } from 'react-native'

export default class Confirm extends Component {
    constructor (props) {
        super(props)

        this.renderAction.bind(this)
    }

    renderAction () {
        const {onCancel, onConfirm, cancelLabel, confirmLabel} = this.props
        return (
            <Dialog.Actions>
                {typeof onCancel !== 'undefined' && <Button onPress={onCancel}>{typeof cancelLabel !== 'undefined' ? cancelLabel : 'Cancel'}</Button>}
                <Button onPress={onConfirm}>{typeof confirmLabel !== 'undefined' ? confirmLabel : 'Confirm'}</Button>
            </Dialog.Actions>
        )
    }

    render () {
        const {visible, onDismiss, children, title, onConfirm, scrollArea, contentContainerStyle, style} = this.props
        return (
            <Portal>
                <Dialog visible={visible} onDismiss={onDismiss}>
                    {typeof title !== 'undefined' && <Dialog.Title>{title}</Dialog.Title>}
                    {typeof scrollArea !== 'undefined' && scrollArea === true && <Dialog.ScrollArea>
                        <ScrollView contentContainerStyle={typeof contentContainerStyle !== 'undefined' ? contentContainerStyle : {}}>
                            {children}
                        </ScrollView>
                    </Dialog.ScrollArea>}
                    {typeof scrollArea === 'undefined' && scrollArea !== true && <Dialog.Content style={typeof style !== 'undefined' ? style : {}}>
                    {children}
                    </Dialog.Content>}
                    {typeof onConfirm !== 'undefined' && this.renderAction() }
                </Dialog>
            </Portal>
        )
    }
    /**
     * @component
     *  <Confirm visible={true} onDismiss={()=> {}} title="helo confirm" scrollArea={false} onConfirm={()=> {}}>
     *      <View></View>
     *  </Confirm>
    **/
}