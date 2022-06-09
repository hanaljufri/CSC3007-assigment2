fetch ( 'https://data.gov.sg/api/action/datastore_search?resource_id=83c21090-bd19-4b54-ab6b-d999c251edcf&')
                .then(response => response.json())
                .then(data =>  {
                    console.log(data)
                    items = data.result.records
                    console.log(items)
                    for (var i=0; i<items.length; i++){
                        if(items[i].year=="2020"){
                            console.log(items[i].year)
                            console.log(items[i].level_2)
                            console.log(items[i].value)
                        }
                    }

                })
