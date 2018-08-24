function Colors(props) {
  
  let screenWidth = props.settingsStorage.getItem("screenWidth");
  let screenHeight = props.settingsStorage.getItem("screenHeight");
  
  return (
    <Page>


      <Select
  label= "Seperator"
  settingsKey="seperator"
  options={[
    {name:"|", value: 0}, 
    {name:"/", value: 1},
    {name:"space", value: 2},
    {name:"\\", value: 3},
  ]}
/>
   
     <Toggle
          settingsKey="toggle"
          label="12h"
        />  
    
    <Toggle
          settingsKey="miles"
          label="Distance mi"
        /> 
       <Toggle
          settingsKey="fahrenheit"
          label="Temperature °F"
        /> 
    
    <Toggle
          settingsKey="americanFormat"
          label="switch month and day"
        /> 
    
    
      <Section
        title={<Text bold align="center">Sunrise Color</Text>}>
        <ColorSelect
          settingsKey="sunriseColor"
          colors={[
            {color: '#F80070'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: '#5F9EA0'},
            {color: 'black'},
            {color: '#14D3F5'},   
            {color: 'white'},
            {color: '#008000'},
            {color: '#DA70D6'},  
            {color: '#6A5ACD'},
            {color: '#FFFF00'},
            {color: '#F83C40'},
    
            {color: '#FF1493'},
            {color: '#FF69B4'},
            {color: '#4B0082'},
            {color: '#00FF00'},
            {color: '#FF4500'},
            {color: '#87CEEB'},
            {color: '#708090'},
            {color: '#DC143C'},
            {color: '#40E0D0'},  
            {color: '#9ACD32'},
            {color: '#008B8B'},
            {color: '#000080'}
          ]}
        />
    </Section>
    
  
    
    
    
          <Section
        title={<Text bold align="center">Sunset Color</Text>}>
        <ColorSelect
          settingsKey="sunsetColor"
          colors={[
            {color: '#F80070'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: '#5F9EA0'},
            {color: 'black'},
            {color: '#14D3F5'},
            {color: 'white'},
            {color: '#008000'},
            {color: '#DA70D6'},  
            {color: '#6A5ACD'},
            {color: '#FFFF00'},
            {color: '#F83C40'},
    
            {color: '#FF1493'},
            {color: '#FF69B4'},
            {color: '#4B0082'},
            {color: '#00FF00'},
            {color: '#FF4500'},
            {color: '#87CEEB'},
            {color: '#708090'},
            {color: '#DC143C'},
            {color: '#40E0D0'},  
            {color: '#9ACD32'},
            {color: '#008B8B'},
            {color: '#000080'}
          ]}
        />
    </Section>
    
    
              <Section
        title={<Text bold align="center">Date Color</Text>}>
        <ColorSelect
          settingsKey="dateColor"
          colors={[
            {color: '#F80070'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: '#5F9EA0'},
            {color: 'black'},
            {color: '#14D3F5'},
            {color: 'white'},
            {color: '#008000'},
            {color: '#DA70D6'}, 
            {color: '#6A5ACD'},
            {color: '#FFFF00'},
            {color: '#F83C40'},
    
            {color: '#FF1493'},
            {color: '#FF69B4'},
            {color: '#4B0082'},
            {color: '#00FF00'},
            {color: '#FF4500'},
            {color: '#87CEEB'},
            {color: '#708090'},
            {color: '#DC143C'},
            {color: '#40E0D0'},  
            {color: '#9ACD32'},
            {color: '#008B8B'},
            {color: '#000080'}
          ]}
        />
    </Section>
    
                  <Section
        title={<Text bold align="center">Hours Color</Text>}>
        <ColorSelect
          settingsKey="hoursColor"
          colors={[
            {color: '#F80070'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: '#5F9EA0'},
            {color: 'black'},
            {color: '#14D3F5'},
            {color: 'white'},
            {color: '#008000'},
            {color: '#DA70D6'},  
            {color: '#6A5ACD'},
            {color: '#FFFF00'},
            {color: '#F83C40'},
    
            {color: '#FF1493'},
            {color: '#FF69B4'},
            {color: '#4B0082'},
            {color: '#00FF00'},
            {color: '#FF4500'},
            {color: '#87CEEB'},
            {color: '#708090'},
            {color: '#DC143C'},
            {color: '#40E0D0'},  
            {color: '#9ACD32'},
            {color: '#008B8B'},
            {color: '#000080'}
          ]}
        />
    </Section>
    
                  <Section
        title={<Text bold align="center">Minutes Color</Text>}>
        <ColorSelect
          settingsKey="minutesColor"
          colors={[
            {color: '#F80070'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: '#5F9EA0'},
            {color: 'black'},
            {color: '#14D3F5'},
            {color: 'white'},
            {color: '#008000'},
            {color: '#DA70D6'},  
            {color: '#6A5ACD'},
            {color: '#FFFF00'},
            {color: '#F83C40'},
    
            {color: '#FF1493'},
            {color: '#FF69B4'},
            {color: '#4B0082'},
            {color: '#00FF00'},
            {color: '#FF4500'},
            {color: '#87CEEB'},
            {color: '#708090'},
            {color: '#DC143C'},
            {color: '#40E0D0'},  
            {color: '#9ACD32'},
            {color: '#008B8B'},
            {color: '#000080'}
          ]}
        />
    </Section>
    
                  <Section
        title={<Text bold align="center">Temperature Color</Text>}>
        <ColorSelect
          settingsKey="weatherColor"
          colors={[
            {color: '#8080FF'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: 'aquamarine'},
            {color: 'black'},
            {color: '#14D3F5'},
            {color: 'white'},
            {color: '#008000'},
            {color: '#DA70D6'},  
            {color: '#6A5ACD'},
            {color: '#FFFF00'},
            {color: '#F83C40'},
    
            {color: '#FF1493'},
            {color: '#FF69B4'},
            {color: '#4B0082'},
            {color: '#00FF00'},
            {color: '#FF4500'},
            {color: '#87CEEB'},
            {color: '#708090'},
            {color: '#DC143C'},
            {color: '#40E0D0'},  
            {color: '#9ACD32'},
            {color: '#008B8B'},
            {color: '#000080'}
          ]}
        />
    </Section>
    
                      <Section
        title={<Text bold align="center">Heartrate Color</Text>}>
        <ColorSelect
          settingsKey="heartrateColor"
          colors={[
            {color: '#F80070'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: '#5F9EA0'},
            {color: 'black'},
            {color: '#14D3F5'},
            {color: 'white'},
            {color: '#008000'},
            {color: '#DA70D6'},  
            {color: '#6A5ACD'},
            {color: '#FFFF00'},
            {color: '#F83C40'},
    
            {color: '#FF1493'},
            {color: '#FF69B4'},
            {color: '#4B0082'},
            {color: '#00FF00'},
            {color: '#FF4500'},
            {color: '#87CEEB'},
            {color: '#708090'},
            {color: '#DC143C'},
            {color: '#40E0D0'},  
            {color: '#9ACD32'},
            {color: '#008B8B'},
            {color: '#000080'}    
          ]}
        />
    </Section>
    
                          <Section
        title={<Text bold align="center">Activity Line Color</Text>}>
        <ColorSelect
          settingsKey="activityLineColor"
          colors={[
            {color: '#F80070'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: '#5F9EA0'},
            {color: 'black'},
            {color: '#14D3F5'},
            {color: 'white'},
            {color: '#008000'},
            {color: '#DA70D6'},  
            {color: '#6A5ACD'},
            {color: '#FFFF00'},
            {color: '#F83C40'},
    
            {color: '#FF1493'},
            {color: '#FF69B4'},
            {color: '#4B0082'},
            {color: '#00FF00'},
            {color: '#FF4500'},
            {color: '#87CEEB'},
            {color: '#708090'},
            {color: '#DC143C'},
            {color: '#40E0D0'},  
            {color: '#9ACD32'},
            {color: '#008B8B'},
            {color: '#000080'}
          ]}
        />
    </Section>
    
                          <Section
        title={<Text bold align="center">Distance Color</Text>}>
        <ColorSelect
          settingsKey="distanceColor"
          colors={[
            {color: '#F80070'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: '#5F9EA0'},
            {color: 'black'},
            {color: '#14D3F5'},
            {color: 'white'},
            {color: '#008000'},
            {color: '#DA70D6'},  
            {color: '#6A5ACD'},
            {color: '#FFFF00'},
            {color: '#F83C40'},
    
            {color: '#FF1493'},
            {color: '#FF69B4'},
            {color: '#4B0082'},
            {color: '#00FF00'},
            {color: '#FF4500'},
            {color: '#87CEEB'},
            {color: '#708090'},
            {color: '#DC143C'},
            {color: '#40E0D0'},  
            {color: '#9ACD32'},
            {color: '#008B8B'},
            {color: '#000080'}
          ]}
        />
    </Section>
    
 <Section
        title={<Text bold align="center">Background Color</Text>}>
        <ColorSelect
          settingsKey="backgroundColor"
          colors={[
            {color: '#F80070'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: '#5F9EA0'},
            {color: 'black'},
            {color: '#14D3F5'},
            {color: 'white'},
            {color: '#008000'},
            {color: '#DA70D6'},  
            {color: '#6A5ACD'},
            {color: '#FFFF00'},
            {color: '#F83C40'},
    
            {color: '#FF1493'},
            {color: '#FF69B4'},
            {color: '#4B0082'},
            {color: '#00FF00'},
            {color: '#FF4500'},
            {color: '#87CEEB'},
            {color: '#708090'},
            {color: '#DC143C'},
            {color: '#40E0D0'},  
            {color: '#9ACD32'},
            {color: '#008B8B'},
            {color: '#000080'}
          ]}
        />
    </Section>
    
     
     <Section
        title={<Text bold align="center">Elevation Color (Versa only)</Text>}>
        <ColorSelect
          settingsKey="baroColor"
          colors={[
            {color: '#F80070'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: '#5F9EA0'},
            {color: 'black'},
            {color: '#14D3F5'},
            {color: 'white'},
            {color: '#008000'},
            {color: '#DA70D6'},  
            {color: '#6A5ACD'},
            {color: '#FFFF00'},
            {color: '#F83C40'},
    
            {color: '#FF1493'},
            {color: '#FF69B4'},
            {color: '#4B0082'},
            {color: '#00FF00'},
            {color: '#FF4500'},
            {color: '#87CEEB'},
            {color: '#708090'},
            {color: '#DC143C'},
            {color: '#40E0D0'},  
            {color: '#9ACD32'},
            {color: '#008B8B'},
            {color: '#000080'}
          ]}
        />
    </Section>
    

                          <Section
        title={<Text bold align="center">Distance Color (Versa only)</Text>}>
        <ColorSelect
          settingsKey="entfernungColor"
          colors={[
            {color: '#F80070'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: '#5F9EA0'},
            {color: 'black'},
            {color: '#14D3F5'},
            {color: 'white'},
            {color: '#008000'},
            {color: '#DA70D6'},  
            {color: '#6A5ACD'},
            {color: '#FFFF00'},
            {color: '#F83C40'},
    
            {color: '#FF1493'},
            {color: '#FF69B4'},
            {color: '#4B0082'},
            {color: '#00FF00'},
            {color: '#FF4500'},
            {color: '#87CEEB'},
            {color: '#708090'},
            {color: '#DC143C'},
            {color: '#40E0D0'},  
            {color: '#9ACD32'},
            {color: '#008B8B'},
            {color: '#000080'}
          ]}
        />
    </Section>

    </Page>
  );
}

  registerSettingsPage(Colors);


