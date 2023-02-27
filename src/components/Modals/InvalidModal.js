import {Modal, Pressable, View, Text, StyleSheet} from 'react-native';

import ModalAlert from '../../assets/svg/Group 7603.svg';

const InvalidModal = ({invalidCredentials, setInvalidCredentials}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={invalidCredentials}>
      <Pressable onPress={() => setInvalidCredentials(false)}>
        <View style={styles.modal}>
          <View style={{flexDirection: 'row', columnGap: 20}}>
            <ModalAlert width={20} height={20} />
            <Text style={styles.modalTitle}>შეცდომაა</Text>
          </View>
          <Text style={styles.modalBodyText}>
            თქვენს მიერ მითითებული მომხმარებელი ან პაროლი არასწორია
          </Text>
        </View>
      </Pressable>
    </Modal>
  );
};

export default InvalidModal;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#EF2E2E',
    height: 92,
    borderRadius: 10,
    margin: 15,
    marginTop: 5,
    padding: 15,
  },
  modalTitle: {
    color: 'white',
    fontSize: 14,
  },
  modalBodyText: {
    fontSize: 12,
    color: '#fff',
    paddingLeft: 40,
  },
});
