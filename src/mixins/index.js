export default {
    methods: {
        goto(e) {
            if (typeof e == "number") {
                this.$router.go(e);
            } else {
                this.$router.push(e)
            }


        }
    }
}