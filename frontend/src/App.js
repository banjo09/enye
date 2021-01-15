import React, { useEffect, useState } from 'react';
import './App.css';
import PaginationControlled from './components/pagination';
import Card from './components/card';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import ControlledOpenSelect from './components/select';
import SearchTextFields from './components/input';
import CircularProgress from '@material-ui/core/CircularProgress';



function App() {
  
  const [records, setRecords] = useState([]);
  const [selectedRecords, setSelectedRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorState, setErrorState] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedSex, setSelectedSex] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const RECORDS_PER_PAGE = 20;
  const Gender = ["All","Male","Female","Prefer to skip"];
  const PaymentMethod = ['All','money order','paypal','cc','check'];
  
  const getTransaction = async () => {
    try {
      setLoading(true); 
      const { data } = await axios.get('https://api.enye.tech/v1/challenge/records');
      setRecords(data.records.profiles);
      setSelectedRecords(data.records.profiles);
      setTotalPages(Math.ceil(data.records.profiles.length / RECORDS_PER_PAGE));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setErrorState(error.message);
    }
  };

  
  // setSelectedRecords(records);
  // setTotalPages(Math.ceil(selectedRecords / RECORDS_PER_PAGE));
  // const startIndex = ( page -1 ) * RECORDS_PER_PAGE
  // const recordsToDisplay = selectedRecords.slice(startIndex, startIndex + RECORDS_PER_PAGE);
  // console.log('recordsToDisplay',recordsToDisplay);

  const onSearchFormSubmit = value => {
    console.log('searchTerm',value);
    const filterRecords = [...records];
    let newRecord = filterRecords.filter((record) => record.Gender === value || record.FirstName === value || record.LastName === value || record.Longitude === value || record.Latitude === value || record.CreditCardNumber === value || record.CreditCardType === value || record.Email === value || record.DomainName === value || record.PhoneNumber === value || record.MacAddress === value || record.URL === value || record.UserName === value || record.LastLogin === value || record.PaymentMethod === value);
    console.log('BANJO search records',newRecord);
    setSelectedRecords(newRecord);
    setTotalPages(Math.ceil(newRecord.length / RECORDS_PER_PAGE));
  }

  const onPageChange = value => {
    setPage(value);
  };

  const onSelectChange = value => {
    setSelectedSex(value);
    setSelectedPaymentMethod('');
    if (value === 'All') {
      const filterRecords = [...records];
      console.log('All records', filterRecords);
      setSelectedRecords(filterRecords);
      console.log('All selectedRecords', selectedRecords);
      setTotalPages(Math.ceil(filterRecords.length / RECORDS_PER_PAGE));
      setPage(1);
    } else{
        const filterRecords = [...records];
        console.log('All records', filterRecords);
        const newRecord = filterRecords.filter(record => record.Gender === value);
        setSelectedRecords(newRecord);
        console.log('All newRecord', newRecord);
        setTotalPages(Math.ceil(newRecord.length / RECORDS_PER_PAGE));
        setPage(1);
    }
    // const newRecord = records.filter(record => record.Gender === value);
    // setSelectedRecords(newRecord);
    // setTotalPages(Math.ceil(newRecord.length / RECORDS_PER_PAGE));
  };

  const onPaymentMethodSelectChange = value => {
    setSelectedPaymentMethod(value);
    setSelectedSex('');
    if (value === 'All') {
      const filterRecords = [...records];
      console.log('All records', filterRecords);
      setSelectedRecords(filterRecords);
      console.log('All selectedRecords', selectedRecords);
      setTotalPages(Math.ceil(filterRecords.length / RECORDS_PER_PAGE));
      setPage(1);
    } else {
      const filterRecords = [...records];
      const newRecord = filterRecords.filter(record => record.PaymentMethod === value);
      setSelectedRecords(newRecord);
      setTotalPages(Math.ceil(newRecord.length / RECORDS_PER_PAGE));
      setPage(1);
    };
  };

  const startIndex = ( page -1 ) * RECORDS_PER_PAGE
  const recordsToDisplay = selectedRecords.slice(startIndex, startIndex + RECORDS_PER_PAGE);

  useEffect (() => {
    getTransaction();
		return () => {
		//
		};
  }, []);
  

  return (
    <div className="App">
      {loading ? (
        // <div>
          <Grid container justify="center" alignItems="center" style={{marginTop: '20rem'}}>
            <Grid item>
              <CircularProgress color="secondary" />
            </Grid>
          </Grid>
        // </div>
      ) : errorState ? (
        <div>{errorState}</div>
      ) : (
        <div>
          <h1 style={{color:'#f44336'}}>Patient Transaction Details</h1> 
          <div style={{ padding: 10 }}>
            <Grid container justify="flex-end">
              <Grid item xs={6}>
                <SearchTextFields searchFormSubmit={onSearchFormSubmit}/>
              </Grid>
            </Grid>
          </div>
          <div style={{ padding: 8 }}>
            <Grid container justify="space-around" alignItems="center" spacing={2}>
              <Grid item xs={4}>
                {selectedRecords.length} Patients
              </Grid>
              <Grid item xs={3}>
                <ControlledOpenSelect Items={Gender} Title='Gender' onSelectChange={onSelectChange} selectedSex={selectedSex}/>
              </Grid>
              <Grid item xs={5}>
                <ControlledOpenSelect Items={PaymentMethod} Title='Payment Method' onSelectChange={onPaymentMethodSelectChange} selectedSex={selectedPaymentMethod}/>
              </Grid>
            </Grid>
          </div>         
          <div style={{ padding: 8 }}>
            <Grid container justify="space-around" alignItems="center" spacing={2}>
              {
                recordsToDisplay.map((record, index) => (
                  <Grid key={`index-${record.LastLogin}-${record.URL} ${index}`} item xs={12} sm={6} md={4}>
                    <Card record={record}/>
                  </Grid>
                ))
              }
            </Grid>
            <br/>
            <Grid container justify="center">
              <PaginationControlled totalPages={totalPages} page={page} onPageChange={onPageChange}/>
            </Grid>
            <br/>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
