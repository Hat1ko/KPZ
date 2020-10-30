/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const App: () => React$Node = () => {
  const topicUnit = [
    {
      id: 'topicId',
      name: 'Topic name',
      description: 'Topic description',
      questions: [
        {
          id: 'questionId1',
          question: 'Question',
          hours: 5,
          dollarPerHour: 2,
          topicId: 'asdasdasd',
        },
        {
          id: 'questionId2',
          question: 'Question',
          hours: 5,
          dollarPerHour: 2,
          topicId: 'asdasdasd',
        },
      ],
    },
    {
      id: 'topicId1',
      name: 'Topic name',
      description: 'Topic description',
      questions: [
        {
          id: 'questionId11',
          question: 'Question',
          hours: 5,
          dollarPerHour: 4,
          topicId: 'asdasdasd',
        },
        {
          id: 'questionId21',
          question: 'Question',
          hours: 5,
          dollarPerHour: 5,
          topicId: 'asdasdasd',
        },
      ],
    },
  ];

  const refresh = () => {};

  const [topicsStatuses, setTopicsStatuses] = useState([]);
  const [questionsStatuses, setQuestionsStatuses] = useState([]);

  // get logic
  //
  //

  if (topicsStatuses.length === 0 && topicUnit.length > 0) {
    const statuses = topicUnit.map((topic) => {
      return {id: topic.id, status: true};
    });

    setTopicsStatuses([...topicsStatuses, ...statuses]);
    console.log(topicsStatuses);
    console.log(statuses);
  }

  if (
    questionsStatuses.length === 0 &&
    topicUnit.map((topic) => topic.questions).reduce((a, b) => [a, b]).length >
      0
  ) {
    let qStatuses = topicUnit.map((topic) => {
      return [
        ...topic.questions.map((question) => {
          return {id: question.id, status: false};
        }),
      ];
    });
    qStatuses = qStatuses.flat(1)
    setQuestionsStatuses([...questionsStatuses, ...qStatuses]);
  }
  // };

  // refresh()

  // console.log(questionsStatuses);
  // console.log(topicsStatuses);

  const TopicRender = ({topicUnit: topicUnit}) => {
    // topicUnit.name
    // topicUnit.description
    // topicUnit.id

    const status = topicsStatuses.find((topic) => topic.id === topicUnit.id);
    // console.log(topicsStatuses)

    const questions = topicUnit.questions;
    // question.id
    // question.question
    //question.hours
    //question.dollarPerHour
    //question.topicId

    return (
      <View>
        <TouchableOpacity style={styles.topicContainer}>
          <Text>{topicUnit.name}</Text>
          <Text>></Text>
        </TouchableOpacity>

        {status.status &&
          questions.map((question) => {
            const changeStatus = () => {
              let statuses = [...questionsStatuses];
              if (statuses.length > 0) {
                const status = statuses.find((s) => s.id === question.id);
                statuses = statuses.filter((s) => s.id !== question.id);
                status.status = !status.status;
                statuses.push(status);
                setQuestionsStatuses(statuses);
              }
            };

            const statuses = [...questionsStatuses];
            let status = {id: question.id, status: false};
            if (statuses.length > 0) {
              status = statuses.find((s) => s.id === question.id);
              console.log(status)
              console.log(statuses)
              console.log(questionsStatuses)
            }

            console.log(status)

            return (
              <>
                <TouchableOpacity
                  style={styles.questionContainer}
                  onPress={changeStatus}>
                  <View style={{width: '90%', flexDirection: 'row'}}>
                    <Text style={{width: '70%'}}>{question.question}</Text>
                    <Text style={{width: '15%'}}>
                      {`${question.dollarPerHour}$`}
                    </Text>
                    <Text style={{width: '15%'}}>{question.hours}</Text>
                  </View>

                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {status.status && (
                      <View
                        style={[
                          {
                            borderRadius: 25,
                            borderWidth: 1,
                            borderColor: 'black',
                            width: 22,
                            height: 22,
                          },
                          {backgroundColor: 'black'},
                        ]}
                      />
                    )}

                    {!status.status && (
                      <View
                        style={[
                          {
                            borderRadius: 25,
                            borderWidth: 1,
                            borderColor: 'black',
                            width: 22,
                            height: 22,
                          },
                        ]}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              </>
            );
          })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={{marginTop: 50}} />
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginBottom: 15,
          }}>
          <TouchableOpacity style={styles.buttonContainer} onPress={refresh}>
            <Text style={styles.buttonTitle}>Refresh</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonTitle}>Add question</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={{height: '80%', borderRadius: 35}}>
          <View style={{height: 15}} />

          {topicUnit.map((topic) => (
            <TopicRender topicUnit={topic} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#F4F4F4',
    height: '100%',
  },
  buttonContainer: {
    backgroundColor: 'black',
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  buttonTitle: {
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  topicContainer: {
    marginHorizontal: 16,
    marginBottom: 10,

    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,

    backgroundColor: 'cyan',

    shadowRadius: 15,
    shadowOpacity: 0.05,
    shadowOffset: {
      height: 10,
      width: 2,
    },

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  questionContainer: {
    marginHorizontal: 16,
    marginBottom: 20,

    paddingVertical: 15,
    paddingHorizontal: 10,

    backgroundColor: 'white',
    borderRadius: 25,
    // height: 75,

    shadowRadius: 15,
    shadowOpacity: 0.12,
    shadowOffset: {
      height: 15,
      // width: 10,
    },

    flexDirection: 'row',
  },
});

export default App;
