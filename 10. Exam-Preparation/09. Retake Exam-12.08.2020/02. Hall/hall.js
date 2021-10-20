function hall() {

    class Hall {
        constructor(capacity, name) {
            this.capacity = capacity;
            this.name = name;
            this.events = [];
            this.allPerformers = [];
        }

        hallEvent(title) {
            if (this.events.find((e) => e == title)) {
                throw new Error("This event is already added!");
            } else {
                this.events.push(title);
                return "Event is added.";
            }
        }

        close() {
            this.events = [];
            return `${this.name} hall is closed.`;
        }

        toString() {
            let message = '';
            message = `${this.name} hall - ${this.capacity}`;
            if (this.events.length > 0) {
                message += `\nEvents: ${this.events.join(', ')}`;
            }

            return message;
        }
    }

    class MovieTheater extends Hall {
        constructor(capacity, name, screenSize) {
            super(capacity, name);
            this.screenSize = screenSize;
        }

        close() {
            let result = super.close();

            return result + `Аll screenings are over.`;
        }

        toString() {
            let result = super.toString();
            let message = `\n${this.name} is a movie theater with ${this.screenSize} screensize and ${this.capacity} seats capacity.`;

            return result + message;
        }
    }

    class ConcertHall extends Hall {
        constructor(capacity, name) {
            super(capacity, name);
            this.events = [];
        }

        hallEvent(title, performers) {
            if (this.events.includes(title)) {
                throw new Error("This event is already added!");
            } else {
                super.hallEvent(title);
                this.allPerformers.push(performers);

                return "Event is added.";
            }
        }

        close() {
            let result = super.close();

            return result + `Аll performances are over.`;
        }

        toString() {
            let result = super.toString();

            if (this.events.length > 0) {
                result += `\nPerformers: ${this.allPerformers.join(', ')}.`;
            }
            return result;
        }
    }

    return {
        Hall,
        MovieTheater,
        ConcertHall
    }
}