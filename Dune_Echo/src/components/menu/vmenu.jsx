import React, { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator"
import { useQuery, gql } from '@apollo/client'; // Assuming Apollo Client is set up in your project
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"; // Assuming you're using a UI component library like Radix UI for tables
import WalletProvider, { useWalletContext } from "@/components/context/walletcontext"; // Updated path
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// import LineChartComponent from "../UI/LineChartComponent"; // Import the LineChartComponentL

// Define the GraphQL query for fetching wallet holdings



// This query has a resolver
const DUNE_WALLET_HOLDINGS = gql`
  query DuneWalletHoldings($address: String!) {
    duneWalletHoldings(address: $address) {
      chain
      chainId
      tokenAddress
      amount
      symbol
      name
      decimals
      priceUsd
      valueUsd
      poolSize
      lowLiquidity
    }
  }
`;


// Add this query at the top with your other queries


const VmMenu = () => {
    const [activeSection, setActiveSection] = useState("All");
    const { wallets, selectedWalletAddress } = useWalletContext();

    const [allHoldings, setAllHoldings] = useState([]);


    // Add this function to fetch chain logo
    

    // Add useEffect to fetch chain logos
    useEffect(() => {
        const holdings = selectedWalletAddress ? data?.duneWalletHoldings || [] : allHoldings;
     
      
    }, [allHoldings, selectedWalletAddress]);

    // Replace the chain cell with:


    useEffect(() => {
        if (selectedWalletAddress === null) {
            const fetchAllHoldings = async () => {
                const allHoldings = [];
                for (const wallet of wallets) {
                    console.log('Fetching holdings for wallet:', wallet.address);
                    const { data } = await useQuery(DUNE_WALLET_HOLDINGS, { variables: { address: wallet.address } });
                    console.log('Dune API response:', data);
                    if (data?.duneWalletHoldings) {
                        console.log('Dune holdings found:', data.duneWalletHoldings);
                        allHoldings.push(...data.duneWalletHoldings);
                    }
                }
                console.log('All holdings collected:', allHoldings);
                setAllHoldings(allHoldings);
            };
            fetchAllHoldings();
        }
    }, [selectedWalletAddress, wallets]);


    const address = selectedWalletAddress; // Use the selected wallet's address
    console.log('Address used for query:', address);

    // Determine which query to use based on the selected wallet's chain
    const selectedWallet = wallets.find(wallet => wallet.address === selectedWalletAddress);
    // const query = selectedWallet?.chain === 'supra' ? SCRAPED_TABLE_DATA : GET_WALLET_HOLDINGS;


    const { loading, error, data } = useQuery(DUNE_WALLET_HOLDINGS, {
        variables: { address: address },
        skip: !address // Skip the query if no address is provided
    });


    console.log("fetcing data", data);
    // Sections array
    // Sections array
    const sections = ["All"];


    // Helper function to categorize holdings by chain


    const calculateTotalBalance = (holdings) => {
        let total = 0;
        // Assuming 'holdings' is directly the array of holding objects for an address
        holdings.forEach(holding => {
            // Convert the amount to a number and multiply by price
            const amount = parseFloat(holding.amountRaw) * holding.price.price;
            if (!isNaN(amount)) {
                total += amount;
            }
        });
        return total;
    };





    const renderSectionContent = () => {


        function truncateAddress(address) {
            if (!address) return "N/A";
            const length = address.length;
            if (length <= 10) return address; // If address is short, return it as is
            return `${address.slice(0, 20)}...${address.slice(length - 10)}`;
        }


        // Use data from the GraphQL query instead of sortedHoldings
        const holdings = selectedWalletAddress ? data?.duneWalletHoldings || [] : allHoldings;
        const sectionHoldings = holdings.filter(holding =>
            activeSection === "All" || (holding.chain === activeSection)
        );

        switch (activeSection) {
            case "All":

                return (
                    // column
                    <div className="flex flex-col">


                        {/* Token Tables */}
                        <div className="flex flex-col space-y-2">
                            <Table className="bg-[#3A2048] rounded-[5px]">
                                <TableHeader className="text-white bg-[#5A3D6A] ">
                                    <TableRow className="border-transparent rounded-lg text-xs">
                                        <TableHead className="w-[100px] text-white p-2 rounded-l-[5px]">Token</TableHead>
                                        <TableHead className=" text-white">Chain</TableHead>
                                        <TableHead className=" text-white">Price</TableHead>
                                        <TableHead className=" text-white">Amount</TableHead>
                                        <TableHead className=" text-white text-right rounded-r-[5px]">USD Value</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="text-white font-semibold border-none">
                                    {sectionHoldings.map((holding, index) => (
                                        <Dialog key={`${holding.name || index}-${index}`}>
                                            <DialogTrigger asChild>
                                                <TableRow className="border-none cursor-pointer hover:bg-[#5A3D6A]">
                                                    <TableCell className="font-medium text-xs">
                                                        <div className="flex items-center">
                                        
                                                            <span className="text-xs">{holding.symbol|| "N/A"}</span>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="text-xs">
                                                        {holding.chain || "N/A"}
                                                    </TableCell>
                                                    <TableCell className="text-xs">
                                                        {selectedWallet?.chain === 'supra'
                                                            ? `$${priceData?.getSupraPrice?.price?.toFixed(5) || "N/A"}`
                                                            : `$${Number(parseFloat(holding.priceUsd || 0)).toLocaleString('en-US', {
                                                                minimumFractionDigits: 2,
                                                                maximumFractionDigits: 2,
                                                                notation: 'compact',
                                                                compactDisplay: 'short'
                                                            })}`
                                                        }
                                                    </TableCell>
                                                    <TableCell className="text-xs">
                                                        {Number(holding.amount / Math.pow(10, holding.decimals || 18)).toLocaleString('en-US', {
                                                            minimumFractionDigits: 2,
                                                            maximumFractionDigits: 6,
                                                            useGrouping: true
                                                        })}
                                                    </TableCell>
                                                    <TableCell className="text-right text-xs">
                                                        ${Number(parseFloat(holding.valueUsd || 0)).toLocaleString('en-US', {
                                                            minimumFractionDigits: 2,
                                                            maximumFractionDigits: 2,
                                                            notation: 'compact',
                                                            compactDisplay: 'short'
                                                        })}
                                                    </TableCell>
                                                </TableRow>
                                            </DialogTrigger>
                                            <DialogContent
                                                className="max-w-2xl p-6 glass border-none"
                                            >                                                <DialogHeader>
                                                    <DialogTitle className="text-white">{holding.name}</DialogTitle>

                                                    <DialogDescription className="text-white text-md font-semibold">
                                                        Symbol: {holding.symbol}<br />
                                                        ContractAddress: {holding.tokenAddress} <br />
                                                        Chain: {holding.chain} <br />
                                                        Price: ${selectedWallet?.chain === 'supra'
                                                            ? priceData?.getSupraPrice?.price?.toFixed(5)
                                                            : parseFloat(holding.priceUsd || 0).toFixed(5) || "N/A"}<br />
                                                        Amount: {holding.amount || "N/A"}<br />
                                                        USD Value: ${parseFloat(holding.valueUsd || 0).toLocaleString('en-US', {
                                                            minimumFractionDigits: 2,
                                                            maximumFractionDigits: 3
                                                        })}
                                                    </DialogDescription>
                                                </DialogHeader>
                                            </DialogContent>
                                        </Dialog>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>

                );
            default:
                return null;
        }
    };


    return (
        <div className="bg-transparent rounded-md">
            {/* Section Bar Menu */}
            <div className="flex justify-between space-x-4  relative">
                {sections.map((section, index) => (
                    <button
                        key={section}
                        className={`
                            text-xs font-medium px-0 py-1 rounded-md transition-all duration-300 relative
                            flex-1
                            ${activeSection === section
                                ? 'bg-white text-[#8C4FAD]'
                                : 'bg-[#8C4FAD] text-white opacity-50 hover:opacity-100'}
                        `}
                        onClick={() => setActiveSection(section)}
                        aria-label={`Navigate to ${section} section`}
                    >
                        {section}
                    </button>
                ))}
            </div>

            {/* Section Content */}
            <div className=" flex-grow overflow-y-auto max-h-[180px]">
                <div className="mb-3">
                    <div className="mt-2">
                        {renderSectionContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VmMenu;