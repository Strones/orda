function Colors(props) {
  
  let screenWidth = props.settingsStorage.getItem("screenWidth");
  let screenHeight = props.settingsStorage.getItem("screenHeight");
  let colorSet_old = [
    			{color: '#F0F8FF'},                              
          {color: '#FAEBD7'},
		    	{color: '#00FFFF'},                              
          {color: '#7FFFD4'},
			    {color: '#F0FFFF'},                              
          {color: '#F5F5DC'},
			    {color: '#FFE4C4'},                              
			    {color: '#FFEBCD'},                              
          {color: '#0000FF'},
			    {color: '#8A2BE2'},                              
          {color: '#A52A2A'},
			    {color: '#DEB887'},                              
          {color: '#5F9EA0'},
			    {color: '#7FFF00'},                              
          {color: '#D2691E'},
			    {color: '#FF7F50'},                              
          {color: '#6495ED'},
		    	{color: '#FFF8DC'},                              
          {color: '#DC143C'},                              
          {color: '#00008B'},
		    	{color: '#008B8B'},                              
          {color: '#B8860B'},
			    {color: '#A9A9A9'},                              
          {color: '#006400'},                              
          {color: '#BDB76B'},
			    {color: '#8B008B'},                              
          {color: '#556B2F'},
			    {color: '#FF8C00'},                              
          {color: '#9932CC'},
			    {color: '#8B0000'},                              
          {color: '#E9967A'},
		    	{color: '#8FBC8F'},                              
          {color: '#483D8B'},                              
          {color: '#2F4F4F'},
		    	{color: '#00CED1'},                              
          {color: '#9400D3'},
		    	{color: '#FF1493'},                              
          {color: '#00BFFF'},
		    	{color: '#696969'},                              
			    {color: '#1E90FF'},                              
          {color: '#B22222'},
			    {color: '#FFFAF0'},                              
          {color: '#228B22'},
			    {color: '#FF00FF'},                              
          {color: '#DCDCDC'},
			    {color: '#F8F8FF'},                              
          {color: '#FFD700'},
			    {color: '#DAA520'},                              
          {color: '#808080'},
		    	{color: '#008000'},                              
          {color: '#ADFF2F'},                              
          {color: '#F0FFF0'},
			    {color: '#FF69B4'},                              
          {color: '#CD5C5C'},
			    {color: '#4B0082'},                              
          {color: '#FFFFF0'},
			    {color: '#F0E68C'},                              
          {color: '#E6E6FA'},
			    {color: '#FFF0F5'},                              
          {color: '#7CFC00'},
			    {color: '#FFFACD'},                              
          {color: '#ADD8E6'},
		    	{color: '#F08080'},                              
          {color: '#E0FFFF'},
		    	{color: '#FAFAD2'},                              
          {color: '#D3D3D3'},
			    {color: '#90EE90'},                              
		    	{color: '#FFB6C1'},                              
          {color: '#FFA07A'},
		    	{color: '#20B2AA'},                              
          {color: '#87CEFA'},
			    {color: '#778899'},                              
		    	{color: '#B0C4DE'},                              
          {color: '#FFFFE0'},
		    	{color: '#00FF00'},                              
          {color: '#32CD32'},
		    	{color: '#800000'},                              
          {color: '#66CDAA'},
			    {color: '#0000CD'},                              
          {color: '#BA55D3'},
		    	{color: '#9370DB'},                              
          {color: '#3CB371'},
		    	{color: '#7B68EE'},                              
          {color: '#00FA9A'},
			    {color: '#48D1CC'},                              
          {color: '#C71585'},
			    {color: '#191970'},                              
          {color: '#F5FFFA'},
		    	{color: '#FFE4E1'},                              
          {color: '#FFE4B5'},
			    {color: '#FFDEAD'},                              
          {color: '#000080'},
		    	{color: '#FDF5E6'},                              
          {color: '#808000'},
		    	{color: '#6B8E23'},                              
          {color: '#FFA500'},
		    	{color: '#FF4500'},                              
          {color: '#DA70D6'},
		    	{color: '#EEE8AA'},                              
          {color: '#98FB98'},
		    	{color: '#AFEEEE'},                              
          {color: '#DB7093'},
		    	{color: '#FFEFD5'},                              
          {color: '#FFDAB9'},
		    	{color: '#CD853F'},                              
          {color: '#FFC0CB'},
		    	{color: '#DDA0DD'},                              
          {color: '#B0E0E6'},
			    {color: '#800080'},                              
          {color: '#FF0000'},
		    	{color: '#BC8F8F'},                              
          {color: '#4169E1'},
	    		{color: '#8B4513'},                              
          {color: '#FA8072'},
		    	{color: '#F4A460'},                              
          {color: '#2E8B57'},
			    {color: '#FFF5EE'},                              
          {color: '#A0522D'},
		    	{color: '#C0C0C0'},                              
          {color: '#87CEEB'},
		    	{color: '#6A5ACD'},                              
          {color: '#708090'},                              
          {color: '#FFFAFA'},
		    	{color: '#00FF7F'},                              
          {color: '#4682B4'},
		    	{color: '#D2B48C'},                              
          {color: '#008080'},
		    	{color: '#D8BFD8'},                              
          {color: '#FF6347'},
		    	{color: '#40E0D0'},                              
          {color: '#EE82EE'},
		    	{color: '#F5DEB3'},                              
          {color: '#FFFFFF'},
		    	{color: '#F5F5F5'},                              
          {color: '#FFFF00'},
		    	{color: '#9ACD32'},                              
          {color: '#3BF7DE'},
		    	{color: '#000000'},                              
          {color: '#3182DE'},
		    	{color: '#8080FF'},                              
          {color: '#14D3F5'},
		    	{color: '#505050'},                              
          {color: '#303030'},
		    	{color: '#00A629'},                              
          {color: '#134022'},
		    	{color: '#5B4CFF'},                              
          {color: '#BCD8F8'},
		    	{color: '#A0A0A0'},                              
          {color: '#B8FC68'},
			    {color: '#F80070'},                              
          {color: '#5BE37D'},
			    {color: '#FC6B3A'},                              
          {color: '#FFCC33'},
			    {color: '#F83478'},                              
          {color: '#A51E7C'},
			    {color: '#BD4EFC'},                              
          {color: '#F83C40'},
		    	{color: '#7090B5'},                              
          {color: '#1B2C40'},
			    {color: '#D828B8'},                              
			    {color: '#E4FA3C'},                              
		      {color: '#394003'}

  ]
  
  
let colorSet = [
          {color: '#F0F8FF'},                              
          {color: '#FAEBD7'},
          {color: '#000000'},
		    	{color: '#00FFFF'},                              
          {color: '#7FFFD4'},
			    {color: '#F0FFFF'},                              
          {color: '#F5F5DC'},
			    {color: '#FFE4C4'},                              
			    {color: '#FFEBCD'},                              
          {color: '#0000FF'},
			    {color: '#8A2BE2'},                              
          {color: '#A52A2A'},
			    {color: '#DEB887'},                              
          {color: '#5F9EA0'},
			    {color: '#7FFF00'},                              
          {color: '#D2691E'},
			    {color: '#FF7F50'},                              
          {color: '#6495ED'},
		    	{color: '#FFF8DC'},                              
          {color: '#DC143C'},                              
          {color: '#00008B'},
		    	{color: '#008B8B'},                              
          {color: '#B8860B'},
			    {color: '#A9A9A9'},                              
          {color: '#006400'},                              
          {color: '#BDB76B'},
			    {color: '#8B008B'},                              
          {color: '#556B2F'},
			    {color: '#FF8C00'},                              
          {color: '#9932CC'},
			    {color: '#8B0000'},                              
          {color: '#E9967A'},
		    	{color: '#8FBC8F'},                              
          {color: '#483D8B'},                              
          {color: '#2F4F4F'},
		    	{color: '#00CED1'},                              
          {color: '#9400D3'},
		    	{color: '#FF1493'},                              
          {color: '#00BFFF'},
		    	{color: '#696969'},                              
			    {color: '#1E90FF'},                              
          {color: '#B22222'},
			    {color: '#FFFAF0'},                              
          {color: '#228B22'},
			    {color: '#FF00FF'},                              
          {color: '#DCDCDC'},
			    {color: '#F8F8FF'},                              
          {color: '#FFD700'},
			    {color: '#DAA520'},                              
          {color: '#808080'},
		    	{color: '#008000'},                              
          {color: '#ADFF2F'},                              
          {color: '#F0FFF0'},
			    {color: '#FF69B4'},                              
          {color: '#CD5C5C'},
			    {color: '#4B0082'},                              
          {color: '#FFFFF0'},
			    {color: '#F0E68C'},                              
          {color: '#E6E6FA'},
			    {color: '#FFF0F5'},                              
          {color: '#7CFC00'},
			    {color: '#FFFACD'},                              
          {color: '#ADD8E6'},
		    	{color: '#F08080'},                              
          {color: '#E0FFFF'},
		    	{color: '#FAFAD2'},                              
          {color: '#D3D3D3'}
  ]
  return (
    <Page>
   
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
          colors={colorSet}
        />
    </Section>
    
  
    
    
    
          <Section
        title={<Text bold align="center">Sunset Color</Text>}>
        <ColorSelect
          settingsKey="sunsetColor"
          colors={colorSet}
        />
    </Section>
    
    
              <Section
        title={<Text bold align="center">Date Color</Text>}>
        <ColorSelect
          settingsKey="dateColor"
          colors={colorSet}
        />
    </Section>
    
                  <Section
        title={<Text bold align="center">Hours Color</Text>}>
        <ColorSelect
          settingsKey="hoursColor"
          colors={colorSet}
        />
    </Section>
    
                  <Section
        title={<Text bold align="center">Minutes Color</Text>}>
        <ColorSelect
          settingsKey="minutesColor"
          colors={colorSet}
        />
    </Section>
    
                  <Section
        title={<Text bold align="center">Temperature Color</Text>}>
        <ColorSelect
          settingsKey="weatherColor"
          colors={colorSet}
        />
    </Section>
    
                      <Section
        title={<Text bold align="center">Heartrate Color</Text>}>
        <ColorSelect
          settingsKey="heartrateColor"
          colors={colorSet}
        />
    </Section>
    
                          <Section
        title={<Text bold align="center">Activity Line Color</Text>}>
        <ColorSelect
          settingsKey="activityLineColor"
          colors={colorSet}
        />
    </Section>
    
                          <Section
        title={<Text bold align="center">Distance Color</Text>}>
        <ColorSelect
          settingsKey="distanceColor"
          colors={colorSet}
        />
    </Section>
    
 <Section
        title={<Text bold align="center">Background Color</Text>}>
        <ColorSelect
          settingsKey="backgroundColor"
          colors={colorSet}
        />
    </Section>
    
     
     <Section
        title={<Text bold align="center">Elevation Color (Versa only)</Text>}>
        <ColorSelect
          settingsKey="baroColor"
          colors={colorSet}
        />
    </Section>
    

                          <Section
        title={<Text bold align="center">Distance Color (Versa only)</Text>}>
        <ColorSelect
          settingsKey="entfernungColor"
          colors={colorSet}
        />
    </Section>

    </Page>
  );
}

  registerSettingsPage(Colors);


