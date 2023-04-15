import { Forms, General, Alert, Button, HelpMessage, SafeAreaView } from "@vendetta/ui/components";
const { FormText } = Forms;

export default () => (
    <FormText>
        Hello, world!
        <General>
            General
        </General>
        <Alert>
            Alert
        </Alert>
        <Button>
            Button
        </Button>
        <HelpMessage>
            Helpmsg
        </HelpMessage>
        <SafeAreaView>
            SafeAreaView
        </SafeAreaView>
    </FormText>
)