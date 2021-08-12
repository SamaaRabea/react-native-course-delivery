import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { RepoHeader, RepoCard } from "../../components";
import styles from "./style";
// import { useEffect, useState } from "react";
import { getAllRepos } from "../../services/repos";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page,setPage]=useState(1)
  const _onload = async () => {
    const _data = await getAllRepos(page);
    setData([...data,..._data]);
    setLoading(false);
  };
  useEffect(() => {
    _onload();
  }, [page]);
  const renderItem = (data) => {
    return (
      <RepoCard
        key={data.item.id}
        title={data.item.full_name}
        description={data.item.description}
        image={data.item.owner.avatar_url}
        starsNum={data.item.stargazers_count}
        issuseNum={data.item.open_issues}
        githubNum={data.item.owner.login}
      />
    );
  };
  
  const increasePageNumber=()=>{
      setLoading(true)
      setPage((val)=>val+1)
  }
//   console.warn(page)
  return (
    <View style={{ marginBottom: 130 }}>
      <RepoHeader /> 
      {loading &&<ActivityIndicator size="large" color="#000" />}
      <FlatList
        data={data}
        renderItem={renderItem}
        initialNumToRender={20}
        onEndReached={increasePageNumber}
        onEndReachedThreshold={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item, index) => index.toString()}
      />
     
    </View>
  );
}
export default Home;
