import streamlit as st

st.title("My first streamlit app")


slider = st.slider("My slider",value=25)

st.write(f"You have slided {slider}")
st.sidebar.checkbox("first checkbox")
date_input = st.sidebar.date_input("Pick a date")
st.write(f"Selected date {date_input}")
