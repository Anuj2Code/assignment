const price = require('../models/price');

const ui = async(req,res)=>{
  try {
    const {name,base_unit,quote_unit,low,high,last,type,open,volume,sell,buy,at,name1} =  req.body;
    const newCost = new price({
        name:name,
        base_unit:base_unit,
        quote_unit:quote_unit,
        low:low,
        high:high,
        last:last,
        type:type,
        open:open,
        volume:volume,
        sell:sell,
        buy:buy,
        at:at,
        name1:name1
    })
    await newCost.save();
    res.status(200).json({
        success: true,
         newCost,
      });
  } catch (error) {
    console.log(error);
  }
}

const getAll = async(req,res)=>{
   const allPrice = await price.find();
   try {
    if(!allPrice){
        return res.status(400).json({
            success: false
          });
    }

    return res.status(200).json({
        allPrice
    })
   } catch (error) {
    res.status(400).json(error);
    console.log(error);
   }
}

const singleStock = async(req,res)=>{
    try {
    const stock = await price.findById(req.params.id);
    if(!stock){
        return res.status(400).json({
            message: "No stock"
          });
    }
    return res.status(200).json({
       stock
    })
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
}

module.exports = {ui,getAll,singleStock};