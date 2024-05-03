const app = Vue.createApp({
    data () {
        return {
            courseGoalA: 'Finsh the course and learn Vue!',
            courseGoalB: 'Master Vue and build amaying apps!',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5 ) {
                return this.courseGoalA;
            } else{
                return this.courseGoalB
            }
        }
    }
});

app.mount('#user-goal');