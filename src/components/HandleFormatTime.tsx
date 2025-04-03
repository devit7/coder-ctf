import moment from 'moment';

// Haldle format date
const HandleFormatTime = (dateString: any) => {
    return moment(dateString).format('DD MMMM YYYY, HH:mm:ss');
};

export default HandleFormatTime;
